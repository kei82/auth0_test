"use client";

import { useFormState } from "react-dom";
import { cre } from "../act";
import { VSchema, initialState, parseWithCtm } from "./st";
import { useForm } from "@conform-to/react";

export default function Page() {
  const [lastResult, formDispatch] = useFormState(cre, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithCtm(formData, { schema: VSchema });
    },
    defaultValue: initialState,
    shouldValidate: "onBlur",
  });
  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={formDispatch}
      noValidate
    >
      <input
        type="text"
        name={fields.name.name}
        defaultValue={fields.name.initialValue}
      />
      {JSON.stringify(fields)}
      {fields.name.errors}
      <textarea
        name={fields.text.name}
        defaultValue={fields.text.initialValue}
      />
      {fields.text.errors}
      <input
        type="number"
        name={fields.num.name}
        defaultValue={fields.num.initialValue}
      />
      {fields.num.errors}
      <input
        type="checkbox"
        name="checkbox"
        value="{1}"
        defaultChecked={fields.checkbox.initialValue?.includes("{1}")}
      />
      <input
        type="checkbox"
        name="checkbox"
        value="{2}"
        defaultChecked={fields.checkbox.initialValue?.includes("{2}")}
      />
      <input
        type="checkbox"
        name="checkbox"
        value="{3}"
        defaultChecked={fields.checkbox.initialValue?.includes("{3}")}
      />
      {fields.checkbox.errors}
      <select name="select" defaultValue={fields.select.initialValue}>
        <option value="a1">a1</option>
        <option value="a2">a2</option>
        <option value="a3">a3</option>
      </select>
      {fields.select.errors}
      <button type="submit">submit</button>
    </form>
  );
}
