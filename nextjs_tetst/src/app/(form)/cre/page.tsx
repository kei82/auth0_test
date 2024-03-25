"use client";

import { atom, useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

export const textAtom = atom("test");

export const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

// Use them anywhere in your app
const Input = () => {
  const [text, setText] = useAtom(textAtom);
  const handleChange = (e) => setText(e.target.value);
  return <input value={text} onChange={handleChange} />;
};

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
};

export default function Page() {
  const router = useRouter();
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push("/com");
  };
  return (
    <form onSubmit={onSubmit}>
      <Input />
      <Uppercase />
      <button type="submit">test</button>
    </form>
  );
}
