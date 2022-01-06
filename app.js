'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

//BOC:[env]
const fastifyEnv = require('fastify-env')
const schema = {
  type: 'object',
  required: [
    'ENV',
    'DB_SSL',
    'DB_HOST', 
    'DB_PORT',
    'DB_DATABASE', 
    'DB_USERNAME', 
    'DB_PASSWORD', 
  ],
  properties: {
    ENV: {
      type: 'string',
    },
    DB_SSL: {
      type: 'boolean',
    },
    DB_HOST: {
      type: 'string',
      default: 'localhost',
    },
    DB_PORT: {
      type: 'string',
      default: 5432,
    },
    DB_DATABASE: {
      type: 'string',
    },
    DB_USERNAME: {
      type: 'string',
    },
    DB_PASSWORD: {
      type: 'string',
    },
  }
}
const options = {
  schema: schema,
  dotenv: true,
}
//EOC

module.exports = async function (fastify, opts) {
  // Place here your custom code!
 //BOC:[env]
 fastify.register(fastifyEnv, options)
 .after(err=>{
   if(err) { 
     console.log(err) 
     process.exit(1)
   }
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
})
}
