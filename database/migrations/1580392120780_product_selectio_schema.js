'use strict';

const Schema = use('Schema')

class ProductSelectioSchema extends Schema {
  up () {
    this.create('product_selectios', table => {
      table.increments()
      table
        .integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_selectios')
  }
}

module.exports = ProductSelectioSchema
