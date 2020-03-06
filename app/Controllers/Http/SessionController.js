'use strict';
const Stores = use('App/Models/Store')

class SessionController {
  async StoresStore ({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.authenticator('store').attempt(email, password)

    if (token) {
      const user = await Stores.query()
        .where('email', email)
        .fetch()

      return response.json({
        user: user,
        token: token
      })
    }
    return token
  }

  async UserStore ({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)
    if (token) {
      const user = await Stores.query()
        .where('email', email)
        .fetch()

      return response.json({
        user: user,
        token: token
      })
    }
    return token
  }
}

module.exports = SessionController
