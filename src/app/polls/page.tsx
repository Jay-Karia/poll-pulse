"use server"

import { AppType } from "../api/[[...route]]/route"
import { hc } from "hono/client"

export default async function Polls() {

    const client = hc<AppType>('http://localhost:3000/api')

    return (
        <div className="m-6">
            Polls
        </div>
    )
}