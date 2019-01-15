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

Route.get('/chapters/:id', 'ChapterController.getOne').middleware('findOneChapterValidation')

// Route.post('/chapters', async () => {
//   const data = await Chapter.all();

//   return {
//     data: data
//   }
// })

// Route.put('/chapters/:id', async ({ params }) => {
//   const data = await Chapter.find(params.id);

//   if (!data) {
//     const response = {
//       success: false,
//       message: 'Item not found.',
//     }
//   }
//   else {
//     const response = {
//       data: data,
//     }
//   }

//   return response;
// })

// Route.delete('/chapters', async () => {
//   const data = await Chapter.all();

//   return {
//     data: data
//   }
// })