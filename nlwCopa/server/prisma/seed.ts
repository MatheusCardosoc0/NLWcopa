import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main(){
  const user = await prisma.user.create({
    data: {
      name: 'mark',
      email: 'markerrrerye@gmail.com',
      avatarUrl: 'https://avatars.githubusercontent.com/u/105732008?v=4'
    }
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Example',
      code: 'BOLIU',
      ownerId: user.id,

      Participants: {
        create: {
          userId: user.id
        }
      }
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-03T17:38:39.206Z',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR',
    }

  })

  await prisma.game.create({
    data: {
      date: '2022-11-04T12:00:00.2017',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'AR',

      Guess: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              }
            }
          }
        }

      
      }
    }

  })
}



main()