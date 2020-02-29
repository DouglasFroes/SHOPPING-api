'use strict';

const Model = use('Model')
const Env = use('Env')

class CleintFile extends Model {
  static get computed () {
    return ['url']
  }

  getUrl ({ id }) {
    return `${Env.get('APP_URL')}/userFile/${id}`
  }
}

module.exports = CleintFile
