"use server"

import { AppType } from "@/server/routes/pollRoute"
import { hc } from "hono/client"

export default async function Polls() {

    const client = hc<AppType>('https://ideal-rotary-phone-v7p767qxr4vh7qr-3000.app.github.dev/api/poll')

    return (
        <div className="m-6">
            Polls
        </div>
    )
}