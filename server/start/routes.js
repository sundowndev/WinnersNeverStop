'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Chapter = use('App/Models/Chapter')

Route.get('/', () => {
  return {
    code: 200,
    message: 'Hello world in JSON'
  }
})

Route.get('/chapters', async () => {
  const data = await Chapter.all();

  return {
    code: 200,
    message: '',
    data: data
  }
})
