"use client"

import { AppType } from "@/server/routes/pollRoute"
import { hc } from "hono/client"

import { useEffect, useState } from 'react'
import Poll from "@/components/Poll"

import { dummyPolls } from "@/dummy"

export default function Polls() {

    const [polls, setPolls] = useState(dummyPolls)

    const client = hc<AppType>('http://localhost:3000/api/poll')

    useEffect(() => {
        const fetchPolls = async () => {
            console.log("fetching polls")
        }

        fetchPolls()
    }, [])


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
            <div className="border border-gray-500 p-4 rounded-lg">
                {polls.length > 0 ? (
                    <div className="flex flex-col space-y-4">
                        {polls.map((elem) => {
                            return (
                                <div key={elem.id}>
                                    <Poll poll={elem} />
                                </div>
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