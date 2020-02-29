'use strict';

const Model = use('Model')

class Category extends Model {
  product () {
    return this.hasMany('App/Models/Product')
  }
}

module.exports = Category
