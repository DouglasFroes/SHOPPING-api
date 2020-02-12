'use strict';

class SessionController {
  async StoresStore ({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.authenticator('store').attempt(email, password)

    return token
  }

  async UserStore ({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
