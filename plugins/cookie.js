"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
  fastify.register(require("fastify-cookie"), {
    secret: "my-secret", // for cookies signature
    parseOptions: {}, // options for parsing cookies
  });
});
