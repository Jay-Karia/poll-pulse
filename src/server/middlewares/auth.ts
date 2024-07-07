import isLoggedIn from "@/lib/isLoggedIn";
import { createMiddleware } from "hono/factory";

const authMiddleware = createMiddleware(async (c, next) => {
    if (!isLoggedIn(c)) {
        return c.json({
            message: 'Unauthorized',
        }, 401)
    }

    await next()

})

export default authMiddleware