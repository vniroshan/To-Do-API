"use strict";

const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = async function (fastify, opts) {
  fastify.route({
    method: "POST",
    url: "/register",
    // preValidation: [fastify.authenticate],
    schema: {
      tags: ["Accounts"],
      description: "Register new user",
     
      
    },
    handler: async (request, reply) => {
      try {
        const password = bcrypt.hashSync(request.body.password, 10);
        const user = await prisma.users.create({
          data: {
            mobile: request.body.mobile,
            email: request.body.email,
            name: request.body.name,
            password: password,
            type: "User",
          },
        });

        return user;
      } catch (error) {
        next(error);
      }
    },
  });
};
