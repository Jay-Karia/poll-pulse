import { getAuth } from "@hono/clerk-auth";
import { Context } from "hono";

export default function isLoggedIn(c: Context) {
    const auth = getAuth(c)

    if (!auth?.userId)
        return c.json({
            message: 'You are not authenticated!',
        }, 401)

    return true;
}