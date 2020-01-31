"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Product extends Model {
  category() {
    return this.belongsTo("App/Models/Category");
  }
  store() {
    return this.belongsTo("App/Models/Store");
  }
  productSelection() {
    return this.hasMany("App/Models/ProductSelection");
  }
}

module.exports = Product;
