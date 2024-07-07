import { Context } from "hono";
import { getAuth } from "@hono/clerk-auth";

export default async function getUser(c: Context) {
    const auth = getAuth(c);
    if (!auth?.userId) {
        return c.json({
            message: 'Not authenticated!',
        }, 401);
    }

    return auth.userId;
}