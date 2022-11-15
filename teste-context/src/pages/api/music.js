import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

export default async function Music(request, response){
   
 
    const musics = await prisma.music.findMany({
      select: {
        song: true,
        bannerUrl: true
      }
    })
  
    return response.json(musics)
  
}