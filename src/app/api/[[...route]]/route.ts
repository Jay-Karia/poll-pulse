import { clerkMiddleware } from '@hono/clerk-auth'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import pollRoute from '@/server/routes/pollRoute'

const app = new Hono().basePath('/api')

app.use('*', clerkMiddleware())

app.route("/poll", pollRoute)

export const GET = handle(app)
export const POST = handle(app)
export const DELETE = handle(app)