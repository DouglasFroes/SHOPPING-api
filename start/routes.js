"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("create/store", "StoreController.store");
Route.post("create/user", "UserController.store");

Route.get("store", "StoreController.index");

Route.post("session/store", "SessionController.StoresStore");
Route.post("session/user", "SessionController.UserStore");

Route.resource("category", "CategoryController").apiOnly();
Route.resource("product", "ProductController").apiOnly();
