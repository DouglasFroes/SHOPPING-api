'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Store extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async storeInstance => {
      if (storeInstance.dirty.password) {
        storeInstance.password = await Hash.make(storeInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  product () {
    return this.hasMany('App/Models/Product')
  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }
}

module.exports = Store
