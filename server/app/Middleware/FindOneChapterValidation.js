'use strict'

const Joi = require('joi');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindOneChapterValidation {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ response, params }, next) {
    const schema = Joi.object().keys({
      id: Joi.number().integer().required(),
    });

    const result = Joi.validate(params, schema);
      
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

module.exports = FindOneChapterValidation
