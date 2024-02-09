"use server";

import { getSession } from "@auth0/nextjs-auth0";

export async function user() {
  const session = await getSession();
  const user = session?.user;
  return user;
}
