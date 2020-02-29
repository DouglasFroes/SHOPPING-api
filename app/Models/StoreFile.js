'use strict';

const Model = use('Model')
const Env = use('Env')

class StoreFile extends Model {
  static get computed () {
    return ['url']
  }

  getUrl ({ id }) {
    return `${Env.get('APP_URL')}/storeFile/${id}`
  }
}

module.exports = StoreFile
