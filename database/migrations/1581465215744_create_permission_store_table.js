'use strict';

const Schema = use('Schema')

class PermissionUserTableSchema extends Schema {
  up () {
    this.create('permission_store', table => {
      table.increments()
      table
        .integer('permission_id')
        .unsigned()
        .index()
      table
        .foreign('permission_id')
        .references('id')
        .on('permissions')
        .onDelete('cascade')
      table
        .integer('store_id')
        .unsigned()
        .index()
      table
        .foreign('store_id')
        .references('id')
        .on('stores')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('permission_store')
  }
}

module.exports = PermissionUserTableSchema
