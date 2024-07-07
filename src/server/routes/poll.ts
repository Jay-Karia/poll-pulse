import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { createPoll, specificPoll } from "@/server/controllers/pollController"

import authMiddleware from '../middlewares/auth'
import validateCreatePoll from '../middlewares/validate'

const pollRoute = new Hono()

pollRoute.post('/', authMiddleware, validator('json', (value, c) => validateCreatePoll(value, c)), (c) => createPoll(c))
pollRoute.get('/:id', authMiddleware, (c) => specificPoll(c))
pollRoute.delete('/delete/:id', authMiddleware, (c) => specificPoll(c, true))

export default pollRoute