'use strict'

/*
|--------------------------------------------------------------------------
| ChapterSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ChapterSeeder {
  async run() {
    const usersArray = await Factory
      .model('App/Models/Chapter')
      .createMany(5)
    console.log(usersArray);
  }
}

module.exports = ChapterSeeder
