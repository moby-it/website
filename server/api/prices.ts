import * as v from 'valibot';
import { pricesResponseSchema } from "~/utils/prices";

export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event);
  const apiKey = config.regionalPricingApiKey;
  const regionalPricingUrl = config.public.regionalPricingUrl;
  if (!apiKey) return createError('api key not found');
  if (!regionalPricingUrl) return createError('regionalPricingUrl url not found');
  const clientIp = getHeader(event, 'x-forwarded-for')?.split(',')[0];
  if (!clientIp) return createError('no client ip found on request');
  const prices = await $fetch(regionalPricingUrl, {
    headers: {
      'ip-origin': clientIp,
      // 'ip-origin': '2a02:587:9030:d900:f15e:21a6:7583:'
    },
  });
  const { success, output, issues } = v.safeParse(pricesResponseSchema, prices);
  if (!success) return createError({ data: issues });
  return output;
});