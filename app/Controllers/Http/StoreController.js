'use strict';

const Stores = use('App/Models/Store')

class StoreController {
  async index ({ request, response, view }) {
    const stores = await Stores.all()

    return stores
  }

  async store ({ request, response }) {
    const { permissions, roles, ...data } = request.only([
      'storeName',
      'email',
      'password',
      'permissions',
      'roles'
    ])

    const stores = await Stores.create(data)

    if (roles) {
      await stores.roles().attach(roles)
    }
    if (permissions) {
      await stores.permissions().attach(permissions)
    }

    await stores.loadMany(['roles', 'permissions'])

    return stores
  }

  async show ({ params, request, response, view }) {}
  async update ({ params, request, response }) {}
  async destroy ({ params, request, response }) {}
}

module.exports = StoreController
