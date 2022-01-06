'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async function (fastify, opts) {
	var config = {
	  "host":fastify.config.DB_HOST,
	  "port":fastify.config.DB_PORT,
	  "database":fastify.config.DB_DATABASE,
	  "user":fastify.config.DB_USERNAME,
	  "password":fastify.config.DB_PASSWORD,
	}
	if(fastify.config.DB_SSL) {
		config.ssl = {
			"rejectUnauthorized": false
		}
	}
	fastify.register(require('fastify-postgres'), config)
})
