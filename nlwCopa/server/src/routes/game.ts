import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { Autheinticate } from "../plugins/Autheinticate"

export async function gameRoutes(fastify: FastifyInstance){
  fastify.get('/pools/:id/games', {
    onRequest: [Autheinticate],
  }, async (request) => {
    const getPoolsParams = z.object({
      id: z.string(),
    })

    const {id} = getPoolsParams.parse(request.params)

    const games  = await prisma.game.findMany({
      orderBy: {
        date: "desc",
      },

      include: {
        Guess: {
          where: {
            participant: {
              userId: request.user.sub,
              poolId: id
            }
          }
        }
      }
    })

    return {
      games: games.map(game => {
        return {
          ...game,
          Guess: game.Guess.length > 0 ? game.Guess[0] : null,
          //guesses: null
        }
      })
    }
  })
}