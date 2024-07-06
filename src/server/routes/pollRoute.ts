import { Hono } from 'hono'
import { createPoll } from "@/server/controller/pollController"

const pollRoute = new Hono()

// create poll
pollRoute.post('/', (c) => createPoll(c))

export default pollRoute