'use strict';

const File = use('App/Models/ProductFile')
const Helpers = use('Helpers')

class ProductFileController {
  async store ({ request, params, response }) {
    try {
      if (!request.file('file')) return

      const uploads = request.file('file', { size: '2mb' })

      const filename = `${Date.now()}.${uploads.subtype}`

      await uploads.moveAll(Helpers.tmpPath('uploads/products'), file => ({
        name: `${Date.now()}-${file.clientName}`
      }))

      if (!uploads.moveAll()) {
        throw uploads.erro()
      }

      const imag = await uploads.movedList().map(upload =>
        File.create({
          file: upload.fileName,
          name: upload.clientName,
          type: upload.type,
          subtype: upload.subtype,
          product_id: params.id
        })
      )

      //   = File.create({
      //   file: filename,
      //   name: upload.clientName,
      //   type: upload.type,
      //   subtype: upload.subtype,
      //   product_id: params.id
      // }));

      return imag
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'erro of upload the file' } })
    }
  }

  async show ({ params, request, response, view }) {
    const file = await File.findOrFail(params.id)
    return response.download(Helpers.tmpPath(`uploads/products/${file.file}`))
  }

  async update ({ params, request, response }) {}

  /**
   * Delete a productfile with id.
   * DELETE productfiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {}
}

module.exports = ProductFileController
