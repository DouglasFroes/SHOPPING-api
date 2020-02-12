'use strict';

const Product = use('App/Models/Product')

class ProductController {
  async index ({ request, response, view }) {
    const products = await Product.all()

    return products
  }

  async store ({ request, response, auth }) {
    const data = request.only([
      'productName',
      'value',
      'rand',
      'description',
      'amount',
      'amountSold',
      'category_id',
      'store_id'
    ])

    const product = await Product.create({
      ...data,
      category_id: 1,
      store_id: 4
    }) // user_id: auth.user.id});
    return product
  }

  async show ({ params, request, response, view }) {
    const id = 1
    const product = await Product.findById(id)

    return product
  }

  async update ({ params, request, response }) {}
  async destroy ({ params, request, response }) {}
}

module.exports = ProductController
