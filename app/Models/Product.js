'use strict';

const Model = use('Model')

class Product extends Model {
  category () {
    return this.belongsTo('App/Models/Category')
  }

  store () {
    return this.belongsTo('App/Models/Store')
  }

  productFile () {
    return this.hasMany('App/Models/ProductFile')
  }

  productSelection () {
    return this.hasMany('App/Models/ProductSelection')
  }
}

module.exports = Product
