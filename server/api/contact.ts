import { type ContractSchema } from "#shared/utils/contact-form";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const apiKey = config.automailerApiKey;
  const automailerUrl = config.public.automailerUrl;
  if (!apiKey) return createError("api key not found");
  if (!automailerUrl) return createError("automailer url not found");
  const body: ContractSchema = await readBody(event);
  const payload = {
    subject: `[Contact Form] - ${body.name}`,
    to: "gspanos@moby-it.com",
    plainTextContent: `
    Email: ${body.email}
    Body: ${body.moreInfo}
    `,
    htmlContent: `
    <h3>Email from ${body.email}</h3>
    <br>
    <p>${body.moreInfo} </p>
    `,
  };
  const response = await fetch(automailerUrl, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      "X-API-Headers": apiKey,
    },
  });
  if (response.ok) {
    const res = await response.json();
    setResponseStatus(event, 200);
    return "mail sent";
  }
  const text = await response.text();
  console.error(text);
  return setResponseStatus(event, response.status);
});
