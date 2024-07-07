import { z } from 'zod'

export const createPollSchema = z.object({
    question: z.string(),
    options: z.array(z.string()),
})