export default defineEventHandler(event => {
  const config = useRuntimeConfig(event);
  const apiKey = config.regionalPricingApiKey;
  const regionalPricingUrl = config.public.regionalPricingUrl;
  if (!apiKey) return createError('api key not found');
  if (!regionalPricingUrl) return createError('regionalPricingUrl url not found');
  console.log(event.headers);
  return setResponseStatus(event, 200);
});