"use server";

import { ction } from "@/app/postAction";

export default async function Page() {
  return (
    <>
      <form action={ction}>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
