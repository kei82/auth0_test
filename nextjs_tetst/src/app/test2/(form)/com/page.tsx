"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { unzip, State } from "../cre/st";
import { com } from "../act";

export default async function Page() {
  const cookieStore = cookies();
  const formData = cookieStore.get("formData")?.value;

  if (!formData) {
    redirect("/test2");
  }

  const data: State = JSON.parse(unzip(formData));

  return (
    <form action={com}>
      {JSON.stringify(data, null, 2)}
      <input name="formData" readOnly defaultValue={formData} />
      <button type="submit">submit</button>
    </form>
  );
}
