"use client";

import { useFormState } from "react-dom";
import { cre } from "../act";
import { State, initialState } from "./st";

export default function Page() {
  const [formState, formDispatch] = useFormState<State, FormData>(
    cre,
    initialState
  );
  return (
    <form action={formDispatch}>
      <input type="text" name="name" />
      {formState.name}
      <textarea name="text" />
      {formState.text}
      <input type="file" name="img" />
      {formState.img}
      <input type="checkbox" name="checkbox" value="{1}" />
      <input type="checkbox" name="checkbox" value="{2}" />
      <input type="checkbox" name="checkbox" value="{3}" />
      {formState.checkbox}
      <button type="submit">submit</button>
    </form>
  );
}
