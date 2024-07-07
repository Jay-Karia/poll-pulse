import { Context } from "hono";
import prisma from "@/lib/db";

export const createPoll = async (c: Context) => {

    // @ts-ignore
    const { question, options } = c.req.valid('json') as { question: string, options: string[] }

    try {
        // create poll
        await prisma.poll.create({
            data: {
                question,
                options: {
                    create: options.map(option => ({
                        text: option
                    }))
                }
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