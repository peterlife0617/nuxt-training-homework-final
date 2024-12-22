import { z } from 'zod'
import { apiResponseSchema } from '../helper/api-response-schema'

export const roomsDetailSchema = z.object({
  name: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  imageUrlList: z.array(z.string()),
  areaInfo: z.string(),
  bedInfo: z.string(),
  maxPeople: z.number(),
  price: z.number(),
  status: z.number(),
  layoutInfo: z.array(z.object({
    title: z.string(),
    isProvide: z.boolean(),
  })),
  facilityInfo: z.array(z.object({
    title: z.string(),
    isProvide: z.boolean(),
  })),
  amenityInfo: z.array(z.object({
    title: z.string(),
    isProvide: z.boolean(),
  })),
  _id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export const roomsDetailResponseSchema = apiResponseSchema(roomsDetailSchema)

export type RoomsDetailResponse = z.infer<typeof roomsDetailResponseSchema>
