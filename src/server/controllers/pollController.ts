import { Context } from "hono";
import prisma from "@/lib/db";

export const createPoll = async (c: Context) => {
    return c.json({
        message: 'Create poll!',
    })
}