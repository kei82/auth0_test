"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { unzip, State } from "../cre/st";

export default async function Page() {
  const cookieStore = cookies();
  const formData = cookieStore.get("formData")?.value;

  if (!formData) {
    redirect("/testt");
  }

  const data: State = JSON.parse(unzip(formData));

  return (
    <form>
      {JSON.stringify(data, null, 2)}
      <input name="data" readOnly defaultValue={formData} />
      <button type="submit">submit</button>
    </form>
  );
}
