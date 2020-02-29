'use strict';

const File = use('App/Models/StoreFile')
const Helpers = use('Helpers')

class StoreFileController {
  async store ({ request, response, auth }) {
    try {
      if (!request.file('file')) return

      const upload = request.file('file', { size: '2mb' })

      const filename = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads/stores'), {
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
        store_id: auth.user.id
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
    return response.download(Helpers.tmpPath(`uploads/stores/${file.file}`))
  }

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = StoreFileController
