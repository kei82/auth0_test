import { PrismaClient } from "@prisma/client";

const offsetTimeJST = 9 * 60 * 60 * 1000;

function setOffsetTime(obj: any, offsetTime: number): void {
  for (const key in obj) {
    const val = obj[key];
    if (val instanceof Date) {
      obj[key] = new Date(val.getTime() + offsetTime);
    } else if (val !== null && typeof val === "object") {
      setOffsetTime(val, offsetTime);
    }
  }
}

export const prisma = new PrismaClient().$extends({
  query: {
    $allModels: {
      async $allOperations({ args, query }) {
        setOffsetTime(args, offsetTimeJST);
        const result = await query(args);
        setOffsetTime(result, -offsetTimeJST);
        return result;
      },
    },
  },
});
