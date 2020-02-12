'use strict';

const Category = use('App/Models/Category')

class CategoryController {
  async index ({ request, response, view }) {
    const categorys = await Category.all()

    return categorys
  }

  async store ({ request, response }) {
    const data = request.only(['categoriesName', 'description'])

    const category = Category.create(data)

    return category
  }

  async show ({ params, request, response, view }) {
    const id = 1
    const category = await Category.findOrFail(id)

    return category
  }

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = CategoryController
