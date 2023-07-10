import z from "zod";

export const userSchema = z.object({
  ID: z.number(),
  Name: z.string(),
  Email: z.string(),
  CreatedAt: z.string(),
  UpdatedAt: z.string(),
  DeletedAt: z.string().or(z.null()),
});
