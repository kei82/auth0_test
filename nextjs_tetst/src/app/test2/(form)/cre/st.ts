import { parse } from "@conform-to/dom";
import { brotliCompressSync, brotliDecompressSync } from "zlib";
import * as v from "valibot";
import { type Submission } from "@conform-to/dom";

export type State = {
  name: string;
  text: string;
  num: number;
  checkbox: string[];
  select: string;
};

export const initialState: Partial<State> = {
  name: "",
  text: "text",
  checkbox: ["{3}"],
  select: "a2",
};

export const VSchema = v.object({
  name: v.string([v.minLength(2)]),
  text: v.string([v.minLength(2)]),
  num: v.coerce(v.number([v.minValue(2)]), Number),
  checkbox: v.array(v.string(), [v.minLength(1), v.maxLength(5)]),
  select: v.string([v.includes("a2")]),
});

export const parseWithCtm = <Schema extends v.BaseSchema>(
  formData: FormData,
  options: {
    schema: Schema;
  }
): Submission<v.Output<Schema>> => {
  return parse(formData, {
    resolve(data) {
      const result = v.safeParse(options.schema, data);
      const value = result.success ? result.output : undefined;
      const valiError =
        result.issues &&
        (v.flatten<Schema>(new v.ValiError(result.issues)).nested as Record<
          string,
          string[]
        >);
      const error = !result.success ? valiError : undefined;

      return { value, error };
    },
  });
};

export function gzip(input: string) {
  const result = brotliCompressSync(input);
  const value = result.toString("base64");
  return value;
}

export function unzip(value: string) {
  const buffer = Buffer.from(value, "base64");
  const result = brotliDecompressSync(buffer);
  const str = result.toString("utf-8");
  return str;
}
