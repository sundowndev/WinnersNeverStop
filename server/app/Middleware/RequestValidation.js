'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Joi = require('joi');

class RequestValidation {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const schema = Joi.object().keys({
      // 'accept': Joi.any().valid('application/json').required(),
      'content-type': Joi.any().valid('application/json').required(),
    }).unknown()

    const result = Joi.validate(request.headers(), schema);

    if (result.error) {
      return response.send({
        success: false,
        message: 'Request headers error.',
        error: result.error,
      })
    }

    await next()
  }
}

module.exports = RequestValidation
