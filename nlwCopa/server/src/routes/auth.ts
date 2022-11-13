import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { Autheinticate } from '../plugins/Autheinticate'

export async function authRoutes(fastify: FastifyInstance){

  fastify.get('/me', {
    onRequest: [Autheinticate]
  },async (resquest) => {
    return {user: resquest.user}
  })

  fastify.post('/users', async (request) => {
    const createUserBody = z.object({
      access_token: z.string()
    })

    const {access_token}= createUserBody.parse(request.body)

    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      }
    })

    const UserData = await userResponse.json()

    const userinfoSchema = z.object({
      id: z.string(),
      email: z.string().email(),
      name: z.string(),
      picture: z.string().url(),
    })

    const userinfo = userinfoSchema.parse(UserData)

    let user = await prisma.user.findUnique({
     where:{
      googleId: userinfo.id
     }
    })

    if(!user){
      user = await prisma.user.create({
        data: {
          googleId: userinfo.id,
          name: userinfo.name,
          email: userinfo.email,
          avatarUrl: userinfo.picture
        }
      })
    }

    const token = fastify.jwt.sign({
      name: user.name,
      avatarUrl: user.avatarUrl,
    }, {
      sub: user.id,
      expiresIn: '7 dias',
    })

    return {token}
  })
}