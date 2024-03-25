"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { State, initialState, gzip } from "./cre/st";

export async function cre(_: State, formData: FormData): Promise<State> {
  const cookieStore = cookies();
  const cookie: Partial<State> = {};
  for (const key of Object.keys(initialState) as (keyof State)[]) {
    const getData = formData.getAll(key);
    if (key === "checkbox") {
      cookie[key] = getData as string[];
    } else {
      const one = getData.at(0);
      if (one instanceof File) {
        cookie[key] = await one.text();
      } else {
        cookie[key] = one;
      }
    }
  }
  cookieStore.set("formData", gzip(JSON.stringify(cookie)), {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/testt/com",
    maxAge: 1,
  });
  if (!cookie.name?.length) {
    return { ...initialState, ...{ name: "name error" } };
  }
  if (!cookie.text?.length) {
    return { ...initialState, ...{ text: "text error" } };
  }
  redirect("/testt/com");
}
