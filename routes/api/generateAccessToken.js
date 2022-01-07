'use strict'
const bcrypt = require("bcrypt")
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = async function (fastify, opts) {
  fastify.post('/generateAccessToken', async function (request, reply) {

    const {email, password} = request.body;
    if(!email || !password){
        return ({error: true,msg: "Manadatory params are missing"})
    }

    const user = await prisma.users.findUnique({
      where:{
        email : email,
      }
    })


    if(!user) {
        return({
            error: true, msg: "invalid email address"
        })
    }
  //  const hash = bcrypt.hashSync(password, 10);

 //   return hash;
    const validation = await bcrypt.compare(password, user.password);
    if(!validation) {
        return({
            error: true, msg: "invalid password."
        })
    }
    const token = fastify.jwt.sign({email})
    reply.send({ token, email })
    //return({token , email})
  })
  
}
