"use client";

import { useAtom } from "jotai";
import { uppercaseAtom } from "../cre/page";

export default function Page() {
  const [uppercase] = useAtom(uppercaseAtom);
  return <>{uppercase}</>;
}
