import zlib from "zlib";

export type State = {
  name?: string;
  text?: string;
  img?: string;
  checkbox?: string[];
};

export const initialState: State = {
  name: undefined,
  text: undefined,
  img: undefined,
  checkbox: undefined,
};

export function gzip(input: zlib.InputType) {
  const result = zlib.gzipSync(input);
  const value = result.toString("latin1");
  return value;
}

export function unzip(value: string) {
  const buffer = Buffer.from(value, "latin1");
  const result = zlib.unzipSync(buffer);
  const str = result.toString("utf-8");
  return str;
}
