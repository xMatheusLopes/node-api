import { z } from "zod";

export const schema = z.object({
  foo: z.string(),
  bar: z
    .object({
      bazz: z.number(),
    })
    .optional(),
});
