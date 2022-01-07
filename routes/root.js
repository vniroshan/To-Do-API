'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/',{
    preValidation: [fastify.authenticate],
  } , async function (request, reply) {
    return { root: true }
  })
}
