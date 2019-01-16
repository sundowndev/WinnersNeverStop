'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Chapter', (faker) => {
  return {
    title: faker.username(),
    content: faker.username(),
    videoUrl: faker.username(),
    thumbUrl: faker.username()
  }
})
