'use strict'


module.exports = async function (fastify, opts) {
	
	//
  fastify.get(
		'/',
		{
			//preValidation: [fastify.authenticate],
		},
		async (request, response) => {
		  const client = await fastify.pg.connect()
		  await client.query(
		    'INSERT INTO notes(title,body) VALUES ($1, $2)',
		    [
		    	'My First note',
                'My First note body'
		    	
		    ],
		  )
		  client.release()
		  return true
		}
	)
}
