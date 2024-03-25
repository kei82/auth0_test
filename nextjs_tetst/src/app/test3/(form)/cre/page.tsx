"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { login } from "../act";
import { loginSchema } from "./st";

export default function LoginForm() {
  const [lastResult, action] = useFormState(login, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
  });

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
      <div>
        <label>Email</label>
        <input type="email" name={fields.email.name} />
        <div>{fields.email.errors}</div>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name={fields.password.name} />
        <div>{fields.password.errors}</div>
      </div>
      <label>
        <div>
          <span>Remember me</span>
          <input type="checkbox" name={fields.remember.name} />
        </div>
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
