'use strict';

const Route = use('Route')

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
  .middleware(['auth:store', 'is:(Moderator)'])
