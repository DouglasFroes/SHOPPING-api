'use strict';

const Permission = use('Permission')

class PermissionController {
  async index () {
    const permission = await Permission.all()

    return permission
  }

  async store ({ request }) {
    const data = request.only(['name', 'slug', 'description'])

    const permission = await Permission.create(data)

    return permission
  }
}

module.exports = PermissionController
