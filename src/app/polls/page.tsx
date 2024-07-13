"use client"

import { AppType } from "@/server/routes/pollRoute"
import { hc } from "hono/client"

import { useEffect, useState } from 'react'
import Poll from "@/components/Poll"

export default function Polls() {

    const [polls, setPolls] = useState([
        {
            "id": "668a947ce97295ef9f42783e",
            "question": "Best programming language",
            "userId": "[object Response]",
            "options": [
                {
                    "id": "668a947ce97295ef9f42783f",
                    "text": "Java",
                    "votes": 6,
                    "pollId": "668a947ce97295ef9f42783e"
                },
                {
                    "id": "668a947ce97295ef9f427840",
                    "text": "JavaScript",
                    "votes": 4,
                    "pollId": "668a947ce97295ef9f42783e"
                }
            ]
        },
        {
            "id": "668a947ce97295ef9f42783e",
            "question": "Best web framework",
            "userId": "[object Response]",
            "options": [
                {
                    "id": "668a947ce97295ef9f42783f",
                    "text": "Nextjs",
                    "votes": 10,
                    "pollId": "668a947ce97295ef9f42783e"
                },
                {
                    "id": "668a947ce97295ef9f427840",
                    "text": "React",
                    "votes": 4,
                    "pollId": "668a947ce97295ef9f42783e"
                },
                {
                    "id": "668a947ce97295ef9f427840",
                    "text": "Svelte",
                    "votes": 3,
                    "pollId": "668a947ce97295ef9f42783e"
                }
            ]
        },
        {
            "id": "668a947ce97295ef9f42783e",
            "question": "Best theme",
            "userId": "[object Response]",
            "options": [
                {
                    "id": "668a947ce97295ef9f42783f",
                    "text": "Monokai",
                    "votes": 31,
                    "pollId": "668a947ce97295ef9f42783e"
                },
                {
                    "id": "668a947ce97295ef9f427840",
                    "text": "Atom One Dark",
                    "votes": 14,
                    "pollId": "668a947ce97295ef9f42783e"
                }
            ]
        }
    ])

    const client = hc<AppType>('https://ideal-rotary-phone-v7p767qxr4vh7qr-3000.app.github.dev/api/poll')

    return (
        <div className="m-6">
            <div className="my-4">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Polls
                </h3>
                <p className="leading-7 font-light">
                    Start voting now!
                </p>
            </div>
            <div>
                {polls.length > 0 ? (
                    <div className="flex flex-col space-y-4 mt-6">
                        {polls.map((elem) => {
                            return (
                                <Poll poll={elem} />
                            )
                        })}
                    </div>
                ) : (
                    <div>
                        No Polls found
                    </div>
                )}
            </div>
        </div>
    )
}