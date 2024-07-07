import { createPollSchema } from "@/schemas/poll";
import { Context } from "hono";;

const validateCreatePoll = (value : any, c : Context) => {
    const parsed = createPollSchema.safeParse(value)
    if (!parsed.success) {
        return c.json({ message: "Invalid Input!", status: 400 }, 400)
    }
    return parsed.data
};

export default validateCreatePoll;