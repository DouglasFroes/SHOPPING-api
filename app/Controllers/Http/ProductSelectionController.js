'use strict';

const SelcProd = use('App/Models/ProductSelectio')

class ProductSelectionController {
  async index ({ auth }) {
    const selectspros = await SelcProd.query()
      .where({ user_id: auth.user.id })
      .with('product')
      .fetch()

    return selectspros
  }

  async store ({ request, auth }) {
    const data = request.only(['product_id'])

    const selecProd = await SelcProd.create({ ...data, user_id: auth.user.id })

    return selecProd
  }

  async show ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, auth }) {
    const ps = await SelcProd.FindOrFail(params.id)
    if (ps.user.id === auth.user.id) {
      ps.delete()
    }
  }
}

module.exports = ProductSelectionController
