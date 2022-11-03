import Fastify from "fastify";
import {PrismaClient} from '@prisma/client'
import fastifyCors from "@fastify/cors";
import { z } from "zod";
import ShortUniqueId from "short-unique-id";

const prisma = new PrismaClient({
  log: ['query'],
})

async function bootstrap(){
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(fastifyCors, {
    origin: true,
  })



  fastify.get('/pools/count', async () => {
    const count = await prisma.pool.count()

    return { count}
  })



  fastify.get('/users/count', async () => {
    const count = await prisma.user.count()

    return { count}
  })


  fastify.get('/guess/count', async () => {
    const count = await prisma.guess.count()

    return { count}
  })



  fastify.post('/pools', async (request, require ) => {
const createPoolBody = z.object({
  title: z.string()
})

   const {title} = createPoolBody.parse(request.body)

   const generate = new ShortUniqueId({length: 6})

   const uniqueCode = String(generate()).toUpperCase()

   await prisma.pool.create({
    data: {
      title,
      code : uniqueCode
    }
   })

   return {uniqueCode}
  })

  await fastify.listen({port: 3333})
}

bootstrap()