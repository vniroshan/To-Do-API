const fp = require("fastify-plugin")

module.exports = fp(async function(fastify, opts) {
  fastify.register(require("fastify-jwt"), {
    secret: "supersecret",
    messages:{
      noAuthorizationInHeaderMessage:'No Authorization was found.',
    },
    sign:{
      expiresIn: 60 * 60 * 24, //in seconds, expires in 1 day
    },
  })

  fastify.decorate("authenticate", async function(request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})