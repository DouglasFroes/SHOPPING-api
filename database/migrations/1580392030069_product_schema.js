'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', table => {
      table.increments()
      table.string('productName', 80).notNullable()
      table.float('value', 8, 2).notNullable()
      table.string('rand', 100).notNullable()
      table.string('description', 280).notNullable()
      table.integer('amount').notNullable()
      table.integer('amountSold').notNullable()
      table
        .integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('store_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('stores')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
