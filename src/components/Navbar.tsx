"use server"

import Image from "next/image"
import Link from "next/link"

import { Button } from "./ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"

export default async function Navbar() {
    return (
        <div className="flex space-x-4 h-12 p-4 items-center border border-b">
            <Image src="/poll.png" alt="logo" width={25} height={5} tabIndex={0} />
            <Link href="/">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight w-max hover:cursor-pointer hover:opacity-80">
                    Poll Pulse
                </h4>
            </Link>

            <div className="flex justify-between w-full items-center">
                <Button variant="link" asChild>
                    <Link href="/polls">
                        All Polls
                    </Link>
                </Button>
                <div className="flex space-x-4 items-center">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <Button variant={"ghost"} size={"icon"} asChild>
                        <Link href="https://github.com/Jay-Karia/poll-pulse" target="_blank">
                            <GitHubLogoIcon />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}