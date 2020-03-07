'use strict';
const Stores = use('App/Models/Store')
const User = use('App/Models/User')

class SessionController {
  async StoresStore ({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.authenticator('store').attempt(email, password)

    if (token) {
      const { id, storeName } = await Stores.findByOrFail('email', email)

      return response.json({
        user: { id, storeName },
        token: token
      })
    }
    return token
  }

  async UserStore ({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)
    if (token) {
      const { id, username } = await User.findByOrFail('email', email)

      return response.json({
        user: { id, username },
        token: token
      })
    }
    return token
  }
}

module.exports = SessionController
