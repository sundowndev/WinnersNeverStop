'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChaptersSchema extends Schema {
  up () {
    this.create('chapters', (table) => {
      table.increments()
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
      table.string('title', 100).notNullable()
      table.text('description').notNullable()
      table.string('videoUrl', 255).notNullable()
      table.string('thumbUrl', 255).notNullable()
      table.json('content').notNullable()
    })
  }

  down () {
    this.drop('chapters')
  }
}

module.exports = ChaptersSchema
