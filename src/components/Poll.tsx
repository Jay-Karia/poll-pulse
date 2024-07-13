import type Poll from "@/types/poll";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Option from "./Option";

export default function Poll(props: { poll: Poll }) {
    return (
        <div className="border border-gray-400 rounded-lg p-2 my-2">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>{props.poll.question}</AccordionTrigger>
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