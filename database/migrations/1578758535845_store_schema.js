'use strict';

const Schema = use('Schema')

class StoreSchema extends Schema {
  up () {
    this.create('stores', table => {
      table.increments()
      table
        .string('storeName', 80)
        .notNullable()
        .unique()
      table
        .string('email', 254)
        .notNullable()
        .unique()
      table.string('password', 60).notNullable()

      table.integer('CNPJ', 8)
      table.string('descripion', 600)
      table.timestamps()
    })
  }

  down () {
    this.drop('stores')
  }
}

module.exports = StoreSchema
