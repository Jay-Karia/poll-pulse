import { Context } from "hono";
import prisma from "@/lib/db";
import getUser from "@/lib/getUser";

export const createPoll = async (c: Context) => {

    // @ts-ignore
    const { question, options } = c.req.valid('json') as { question: string, options: string[] }

    try {
        // create poll
        await prisma.poll.create({
            data: {
                question,
                userId: await getUser(c) as string,
                options: {
                    create: options.map(option => ({
                        text: option
                    }))
                },
            }
        })

        return c.json({
            message: 'Poll created successfully!',
        })

    } catch (e) {
        console.error(e)
        return c.json({
            message: 'Error creating poll!',
        }, 500)
    }
}

export const getPoll = async (c: Context) => {
    const id = c.req.param("id")

    try {
        // get poll
        const poll = await prisma.poll.findUnique({
            where: {
                id: id
            },
            include: {
                options: true
            }
        })

        if (!poll) {
            return c.json({
                message: 'Poll not found!'
            }, 404)
        }

        return c.json({
            poll
        })

    } catch (e) {
        console.error(e)
        return c.json({
            message: 'Error getting poll!'
        }, 500)
    }
}