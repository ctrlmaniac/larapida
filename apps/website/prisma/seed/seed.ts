import { PrismaClient } from "@prisma/client";
import { superusers } from "./superusers";

const prisma = new PrismaClient();

export async function main() {
  for (const u of superusers) {
    await prisma.user.create({ data: u });
  }
}

main()
