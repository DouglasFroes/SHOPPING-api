"use strict";

const Stores = use("App/Models/Store");

class StoreController {
  async index({ request, response, view }) {
    const stores = await Stores.all();

    return stores;
  }
  async store({ request, response }) {
    const data = request.only(["storeName", "email", "password"]);

    const stores = await Stores.create(data);

    return stores;
  }
  async show({ params, request, response, view }) {}
  async update({ params, request, response }) {}
  async destroy({ params, request, response }) {}
}

module.exports = StoreController;
