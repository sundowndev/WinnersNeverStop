'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Joi = require('joi');

class CreateChapterValidation {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const schema = Joi.object().keys({
      title: Joi.string().min(3).max(35).required(),
      thumbUrl: Joi.string().required(),
      videoUrl: Joi.string().required(),
      content: Joi.any().required(),
    });

    const result = Joi.validate(request.body, schema);

    if (result.error) {
      return response.send({
        success: false,
        message: 'Validation error.',
        error: result.error,
      })
    }

    await next()
  }
}

module.exports = CreateChapterValidation
