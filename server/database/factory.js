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
    description: faker.paragraph(),
    thumbUrl: faker.username(),
    videoUrl: "https://peertube.cpy.re/videos/watch/5a6133b8-3e0c-40dc-b859-69d0540c3fe5",
    content: JSON.stringify([
      {
        title: faker.username(),
        text: faker.paragraph(),
        thumbUrl: faker.username()
      },
      {
        title: faker.username(),
        text: faker.paragraph(),
        thumbUrl: faker.username()
      }
    ])
  }
})
