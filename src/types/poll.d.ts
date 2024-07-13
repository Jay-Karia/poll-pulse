import type Option from "./option"

type Poll = {
    id: string
    question: string
    userId: string
    options: Option[]
}

export default Poll