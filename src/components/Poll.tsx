import type Poll from "@/types/poll";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Poll(props: { poll: Poll }) {
    return (
        <div key={props.poll.id} className="my-2">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>{props.poll.question}</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col space-y-2">
                            {props.poll.options.map((elem) => {
                                return (
                                    <div key={elem.id}>
                                        {elem.text} - {elem.votes}
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