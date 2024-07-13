import { Context } from "hono";
import prisma from "@/lib/db";
import getUser from "@/lib/getUser";

export const createPoll = async (c: Context) => {

    // @ts-ignore
    const { question, options } = c.req.valid('json') as { question: string, options: string[] }

    try {
        // create poll
        const userId = await getUser(c)
        if (!userId) return c.json({ message: 'User not found!' }, 404)

        await prisma.poll.create({
            data: {
                question,
                userId,
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

export const specificPoll = async (c: Context, deletePoll = false) => {
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

        if (deletePoll) {
            // delete poll
            await prisma.poll.delete({
                where: {
                    id: id
                }
            })

            return c.json({
                message: 'Poll deleted successfully!'
            })
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

export const votePoll = async (c: Context) => {
    const id = c.req.param("id")
    const optionId = c.req.param("optionId")

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

        // check if option exists
        const option = poll.options.find(option => option.id === optionId)
        if (!option) {
            return c.json({
                message: 'Option not found!'
            }, 404)
        }

        // update option value
        await prisma.option.update({
            where: {
                id: optionId
            },
            data: {
                votes: option.votes + 1
            }
        })

        return c.json({
            message: 'Voted successfully!'
        })

    } catch (e) {
        console.error(e)
        return c.json({
            message: 'Error voting!'
        }, 500)
    }
}

export const getAllPolls = async (c: Context) => {
    try {
        // get all polls
        const polls = await prisma.poll.findMany({
            include: {
                options: true
            }
        })

        return c.json({
            polls
        })

    } catch (e) {
        console.error(e)
        return c.json({
            message: 'Error getting polls!'
        }, 500)
    }
}