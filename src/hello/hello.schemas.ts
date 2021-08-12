import { z } from "zod";

export const schema = z.object({
  foo: z.string().nonempty(),
  bar: z
    .object({
      bazz: z.number(),
    })
    .optional(),
});
