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

Route.get('/', ({ response }) => {
  return response.send({
    success: true,
    message: 'Hello world.'
  })
})

Route.get('/chapters', 'ChapterController.getAll')

Route.get('/chapters/:id', 'ChapterController.getOne').middleware(['paramIdValidation'])

Route.post('/chapters', 'ChapterController.create').middleware(['createChapterValidation'])

Route.put('/chapters/:id', 'ChapterController.edit').middleware(['paramIdValidation'])

Route.delete('/chapters/:id', 'ChapterController.delete').middleware(['paramIdValidation'])