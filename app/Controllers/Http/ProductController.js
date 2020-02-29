'use strict';

const Product = use('App/Models/Product')

class ProductController {
  async index ({ request, response, view }) {
    const { store } = request.only(['store'])
    const products = await Product.query()
      .where({ store_id: store })
      .where('amount', '>', 'amountSolt')

      .fetch()

    return products
  }

  async store ({ request, response, auth }) {
    const amountSold = 0
    const data = request.only([
      'productName',
      'value',
      'rand',
      'description',
      'amount',
      'category_id'
    ])

    const product = await Product.create({
      ...data,
      amountSold,
      store_id: auth.user.id
    })

    return product
  }

  async show ({ params, request, response, view }) {
    const id = 1
    const product = await Product.findById(id)

    return product
  }

  async update ({ params, request, auth }) {
    const data = request.only([
      'productName',
      'value',
      'rand',
      'description',
      'amount',
      'category_id'
    ])

    const product = await Product.findOrFail(params.id)

    if (auth.user.id === product.store_id) {
      await product.merge(data)
      await product.save()

      return product
    }

    return false
  }

  async destroy ({ params, request, response }) {}
}

module.exports = ProductController
