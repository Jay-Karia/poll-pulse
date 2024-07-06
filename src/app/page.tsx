import { Button } from "@/components/ui/button"

import localFont from "next/font/local"
import { Poppins } from 'next/font/google'
import { cn } from "@/lib/utils"

const headingFont = localFont({
  src: '@/../../../public/fonts/font.woff2',
})

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
})

export default function Home() {
  return (
    <div className={"flex flex-col space-y-3 w-max"}>
      Hello <span className={cn("text-xl text-blue-700", headingFont.className)}>Poll Pulse</span>
      <Button>Click me</Button>
    </div>
  );
}
