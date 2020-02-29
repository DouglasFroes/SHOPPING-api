'use strict';

const File = use('App/Models/CleintFile')
const Helpers = use('Helpers')

class CleintFileController {
  async store ({ request, response, auth }) {
    try {
      if (!request.file('file')) return

      const upload = request.file('file', { size: '2mb' })

      const filename = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads/users'), {
        name: filename
      })

      if (!upload.move()) {
        throw upload.erro()
      }

      const file = File.create({
        file: filename,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype,
        user_id: auth.user.id
      })

      return file
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'erro of upload the file' } })
    }
  }

  async show ({ params, request, response, view }) {
    const file = await File.findOrFail(params.id)
    return response.download(Helpers.tmpPath(`uploads/users/${file.file}`))
  }

  async update ({ params, request, response }) {
    try {
      if (!request.file('file')) return

      const upload = request.file('file', { size: '2mb' })

      const file = await File.findOrFail(params.id)

      await upload.move(Helpers.tmpPath('uploads/users'), {
        name: file.file
      })

      if (!upload.move()) {
        throw upload.erro()
      }

      await file.merge({
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype
      })

      await file.save()

      return file
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'erro of upload the file' } })
    }
  }

  async destroy ({ params, request, response }) {}
}

module.exports = CleintFileController
