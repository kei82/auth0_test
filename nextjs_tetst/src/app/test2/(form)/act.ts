"use server";

import { redirect } from "next/navigation";
import { VSchema, gzip, parseWithCtm, unzip } from "./cre/st";
import { cookies } from "next/headers";
import * as v from "valibot";

export async function cre(_: unknown, formData: FormData) {
  const submission = parseWithCtm(formData, {
    schema: VSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const cookieStore = cookies();
  cookieStore.set("formData", gzip(JSON.stringify(submission.value)), {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/test2/com",
    maxAge: 24 * 60 * 60,
  });
  redirect("/test2/com");
}

export async function com() {
  const cookieStore = cookies();
  const data = cookieStore.get("formData");

  if (!data) {
    return console.log("dataerror");
  }

  const obj = JSON.parse(unzip(data.value));

  const submission = v.safeParse(VSchema, obj);

  if (!submission.success) {
    return console.log("successerror", submission.issues);
  }

  cookieStore.delete({
    name: "formData",
    httpOnly: true,
    secure: true,
    path: "/test2/com",
  });
  console.log("success", submission.output);
  return redirect("/test2");
}
