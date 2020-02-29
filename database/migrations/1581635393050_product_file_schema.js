'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductFileSchema extends Schema {
  up () {
    this.create('product_files', table => {
      table.increments()
      table.string('file').notNullable()
      table.string('name').notNullable()
      table.string('type', 20)
      table.string('subtype', 20)
      table
        .integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_files')
  }
}

module.exports = ProductFileSchema
