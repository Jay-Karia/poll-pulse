import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { createPoll, getAllPolls, specificPoll, votePoll } from "@/server/controllers/pollController"

import authMiddleware from '../middlewares/auth'
import validateCreatePoll from '../middlewares/validate'

const pollRoute = new Hono()

const routes = pollRoute
    .post('/', authMiddleware, validator('json', (value, c) => validateCreatePoll(value, c)), (c) => createPoll(c))
    .get('/:id', authMiddleware, (c) => specificPoll(c))
    .get('/', authMiddleware, (c) => getAllPolls(c))
    .delete('/delete/:id', authMiddleware, (c) => specificPoll(c, true))
    .post("/vote/:id/:optionId", authMiddleware, (c) => votePoll(c))

export default pollRoute
export type AppType = typeof routes