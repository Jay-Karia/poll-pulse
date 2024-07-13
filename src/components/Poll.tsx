import type Poll from "@/types/poll";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import Option from "./Option";

import { useAuth } from "@clerk/nextjs";

interface PollProps {
    poll: Poll
    handleDelete: (pollId: string) => void
}

export default function Poll(props: PollProps) {

    const { userId } = useAuth();

    return (
        <div className="border border-gray-400 rounded-lg p-2 my-2">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <div className="flex justify-between px-4 w-full">
                            {props.poll.question}

                            {userId !== props.poll.userId && (
                                <Button variant={"outline"} size={"icon"} className="bg-red-50" onClick={() => { props.handleDelete(props.poll.id) }}>
                                    <TrashIcon />
                                </Button>
                            )}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col space-y-2">
                            {props.poll.options.map((elem) => {
                                return (
                                    <div key={elem.id}>
                                        <Option option={elem} />
                                    </div>
                                )
                            })}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}