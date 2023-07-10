import z from "zod";

export function createResponseSchema<R extends z.ZodTypeAny>(
  resourceSchema: R
) {
  return z.object({
    data: resourceSchema,
    error: z.string().optional(),
  });
}
