import * as v from "valibot";

export const serviceSchema = v.object({
  Service_Name: v.string(),
  Cost: v.number(),
});

export const pricesResponseSchema = v.object({
  country: v.nullable(v.string()),
  defaultPrices: v.array(serviceSchema),
  regionalPrices: v.optional(v.array(serviceSchema)),
});

export type Service = v.Input<typeof serviceSchema>;
export type PricesResponse = v.Input<typeof pricesResponseSchema>;
