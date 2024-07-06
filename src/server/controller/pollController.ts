import { Context } from "hono";
import prisma from "@/lib/db";

const createPoll = async (c: Context) => {
    return c.json({
        message: 'Create poll!',
    })
}

export { createPoll }