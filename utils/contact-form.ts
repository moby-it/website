import * as v from "valibot";

export const ContractSchema = v.object({
  name: v.string("Choose a name"),
  email: v.string([v.email()]),
  company: v.string("Choose a company"),
  services: v.array(v.string(), [v.minLength(1, "Select a service")]),
  moreInfo: v.optional(v.string()),
});
export type ContractSchema = v.Input<typeof ContractSchema>;
