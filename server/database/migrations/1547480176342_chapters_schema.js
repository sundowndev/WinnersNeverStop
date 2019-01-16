'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChaptersSchema extends Schema {
  up () {
    this.create('chapters', (table) => {
      table.increments()
      table.timestamps()
      table.string('title', 100).notNullable()
      table.text('content').notNullable()
      table.string('videoUrl', 255).notNullable()
      table.string('thumbUrl', 255).notNullable()
    })
  }

  down () {
    this.drop('chapters')
  }
}

module.exports = ChaptersSchema
