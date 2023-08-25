import { z } from "zod";

const re = new RegExp("^[a-zA-Z0-9_]*$")

export const SubredditValidator = z.object({
    name: z.string().min(3).max(21).regex(re)
})

export const SubredditSubscriptionValidator = z.object({
    subredditId: z.string()
})

export type CreateSubredditPayload = z.infer<typeof SubredditValidator>
export type SubcribeToSubredditPayload = z.infer<typeof SubredditSubscriptionValidator>