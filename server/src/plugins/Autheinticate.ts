import { FastifyInstance, FastifyRequest } from "fastify";

export async function Autheinticate(request: FastifyRequest){
  await request.jwtVerify()
}