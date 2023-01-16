import Fastify from "fastify";
import { PrismaClient } from '@prisma/client'

const app = Fastify();
const prisma = new PrismaClient()

app.get("/", async (request, reply) => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'Beber'
      }
    }
  })
  return habits;
});


app.listen({
  port: 3333,
});