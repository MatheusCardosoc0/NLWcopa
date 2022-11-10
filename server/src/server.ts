import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { poolRoutes } from "./routes/pool";
import { guessRoutes } from "./routes/guess";
import { userRoutes } from "./routes/user";
import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";
import JWT from '@fastify/jwt'



async function bootstrap(){
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(fastifyCors, {
    origin: true,
  })

  //Em produção é uma variavel ambiente

  await fastify.register(JWT, {
    secret: 'copa',
  })

  await fastify.register(authRoutes)
  await fastify.register(gameRoutes)
  await fastify.register(poolRoutes)
  await fastify.register(guessRoutes)
  await fastify.register(userRoutes)





  await fastify.listen({port: 3333})
}

bootstrap()