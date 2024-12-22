import { z } from 'zod'
import { apiResponseSchema } from '../helper/api-response-schema'

export const homeCulinarySchema = z.array(z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  diningTime: z.string(),
  image: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
}))

export const homeCulinaryResponseSchema = apiResponseSchema(homeCulinarySchema)

export type HomeCulinaryResponse = z.infer<typeof homeCulinaryResponseSchema>
