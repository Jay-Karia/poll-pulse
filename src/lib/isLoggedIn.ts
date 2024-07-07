import { getAuth } from "@hono/clerk-auth";
import { Context } from "hono";

export default function isLoggedIn(c: Context) {
    const auth = getAuth(c)

    if (!auth?.userId)
        return false

    return true;
}