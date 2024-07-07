import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { createPoll, getPoll } from "@/server/controllers/pollController"

import authMiddleware from '../middlewares/auth'
import validateCreatePoll from '../middlewares/validate'

const pollRoute = new Hono()

// create poll
pollRoute.post('/', authMiddleware, validator('json', (value, c) => validateCreatePoll(value, c)), (c) => createPoll(c))
pollRoute.get('/:id', authMiddleware, (c) => getPoll(c))

export default pollRoute