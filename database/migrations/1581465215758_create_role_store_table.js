'use strict';

const Schema = use('Schema')

class RoleUserTableSchema extends Schema {
  up () {
    this.create('role_store', table => {
      table.increments()
      table
        .integer('role_id')
        .unsigned()
        .index()
      table
        .foreign('role_id')
        .references('id')
        .on('roles')
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
    this.drop('role_store')
  }
}

module.exports = RoleUserTableSchema
