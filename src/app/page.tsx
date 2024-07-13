import localFont from "next/font/local"
import { Poppins } from 'next/font/google'
import { cn } from "@/lib/utils"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const headingFont = localFont({
  src: '@/../../../public/fonts/font.woff2',
})

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
})

export default function Home() {
  return (
    <div className={"flex flex-col space-y-3 w-full"}>
      <div className="w-full flex flex-col items-center justify-center mt-4">

        <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl", headingFont.className)}>
          Poll <span className="text-blue-700">Pulse</span>
        </h1>
        <p className="leading-7 mt-2 text-center">
          Welcome to our simple voting app! <br /> Your voice matters—make it count.
        </p>

        <div className="flex space-x-8 mt-6">
          <Button asChild>
            <Link href="/sign-up">
              Get Started
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/polls">
              Browse Polls
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
