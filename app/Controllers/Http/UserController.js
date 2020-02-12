'use strict';

const User = use('App/Models/User')

class StoreController {
  async index ({ request, response, view }) {
    const users = User.query()
      .with('roles')
      .with('permissions')
      .fetch()
    return users
  }

  async store ({ request, response }) {
    const { permissions, roles, ...data } = request.only([
      'username',
      'email',
      'password',
      'permissions',
      'roles'
    ])

    const user = await User.create(data)

    if (roles) {
      await user.roles().attach(roles)
    }
    if (permissions) {
      await user.permissions().attach(permissions)
    }

    await user.loadMany(['roles', 'permissions'])

    return user
  }

  async show ({ params, request, response, view }) {}

  async update ({ params, request, response }) {
    const { permissions, roles, ...data } = request.only([
      'username',
      'email',
      'password',
      'permissions',
      'roles'
    ])

    const user = await User.findOrFail(params.id)

    user.merge(data)

    await user.save()

    if (roles) {
      await user.roles().sync(roles)
    }
    if (permissions) {
      await user.permissions().sync(permissions)
    }

    await user.loadMany(['roles', 'permissions'])

    return user
  }

  async destroy ({ params, request, response }) {}
}

module.exports = StoreController
