import type Option from "@/types/option";

export default function Option(props: { option: Option }) {

    const handleVote = (pollId: string, optionId: string) => {
        console.log(`Voting poll: ${pollId} option:${optionId}`)
    }

    return (
        <div className="border p-2 rounded-lg bg-white hover:bg-slate-50 hover:cursor-pointer">
            {props.option.text}
        </div>
    )
}