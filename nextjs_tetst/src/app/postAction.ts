"use server";
import { redirect } from "next/navigation";
import { prisma } from "@/app/prismaClient";

export async function postAction(prev: any, formData: FormData) {
  const name = formData.get("name");
  if (!name) {
    return {
      errors: {
        name: "名前を入力してください",
      },
    };
  }
  console.log(name);
  redirect("/com");
}

export async function ction() {
  console.time("prisma");
  const tran = await prisma.$transaction(async (prisma) => {
    await prisma.user.create({
      data: { name: "dadw", time: new Date() },
    });
    await prisma.user.findMany({
      orderBy: { id: "desc" },
    });
    return await prisma.user.findMany({
      where: {
        time: {
          lte: new Date(),
          gte: new Date(new Date().getTime() - 3000),
        },
      },
    });
  });
  console.timeEnd("prisma");
  console.log(tran);
}
