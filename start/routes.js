'use strict';

const Route = use('Route')

Route.get('/', () => 'ola')

Route.post('create/store', 'StoreController.store')

Route.post('user', 'UserController.store')
Route.get('user', 'UserController.index')
Route.put('user/:id', 'UserController.update').middleware('auth')

Route.get('store', 'StoreController.index')

Route.post('session/store', 'SessionController.StoresStore')
Route.post('session/user', 'SessionController.UserStore')

Route.resource('permission', 'PermissionController')
  .apiOnly()
  .middleware('auth')
Route.resource('role', 'RoleController')
  .apiOnly()
  .middleware('auth')

Route.resource('category', 'CategoryController')
  .apiOnly()
  .middleware(['auth', 'is:(administratior || moderator)'])

Route.resource('product', 'ProductController')
  .apiOnly()
  .except(['index'])
  .middleware(['auth:store', 'is:(moderator)'])

Route.get('product', 'ProductController.index').middleware(['auth'])

Route.resource('addProduct', 'ProductSelectionController')
  .apiOnly()
  .middleware('auth')

Route.post('files', 'FileController.store')
Route.get('files/:id', 'FileController.show')

Route.post('storeFile', 'StoreFileController.store').middleware(['auth:store'])
Route.get('storeFile/:id', 'StoreFileController.show')

Route.post('userFile', 'CleintFileController.store').middleware('auth')
Route.get('userFile/:id', 'CleintFileController.show')
Route.put('userFile/:id', 'CleintFileController.update').middleware('auth')

Route.post('productFile/:id', 'ProductFileController.store').middleware([
  'auth:store'
])
Route.get('productFile/:id', 'ProductFileController.show')
