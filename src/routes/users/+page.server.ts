import { PUBLIC_BASE_URL } from "$env/static/public";
import { createResponseSchema } from "../../types/api";
import { userSchema } from "../../types/user";
import z from "zod";

export async function load() {
  const result = await fetch(`http://${PUBLIC_BASE_URL}/admin/users`);

  const json = await result.json();
  const data = createResponseSchema(z.array(userSchema)).parse(json);

  return data;
}
