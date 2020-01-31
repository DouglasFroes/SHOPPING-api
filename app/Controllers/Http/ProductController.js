"use strict";

const Product = use("App/Models/Product");

class ProductController {
  async index({ request, response, view }) {
    return await Product.all();
  }
  async store({ request, response }) {
    const data = request.only([
      "productName",
      "value",
      "rand",
      "description",
      "amount",
      "amountSold"
    ]);

    const Product = await Product.create({
      ...data,
      category_id: 1,
      store_id: 4
    }); //user_id: auth.user.id});
  }
  async show({ params, request, response, view }) {
    const id = 1;
    const product = await Product.findById(id);

    return product;
  }
  async update({ params, request, response }) {}
  async destroy({ params, request, response }) {}
}

module.exports = ProductController;
