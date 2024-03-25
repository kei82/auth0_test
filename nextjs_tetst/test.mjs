import * as v from "valibot";
const VSchema = v.object({
  name: v.string(),
  text: v.string(),
  num: v.coerce(v.number(), Number),
  date: v.coerce(v.date("日付が間違っています"), (i) => new Date(i)),
});
const result = v.safeParse(VSchema, {
  name: "",
  text: "",
  num: "6",
  date: "2",
});
console.log(result);
