'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoreFileSchema extends Schema {
  up () {
    this.create('store_files', table => {
      table.increments()
      table.string('file').notNullable()
      table.string('name').notNullable()
      table.string('type', 20)
      table.string('subtype', 20)
      table
        .integer('store_id')
        .unsigned()
        .notNullable()
        .unique()
        .references('id')
        .inTable('stores')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('store_files')
  }
}

module.exports = StoreFileSchema
