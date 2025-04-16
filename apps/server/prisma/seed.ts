import { PrismaClient } from './prisma';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
async function main() {
  const passwordHash = bcrypt.hashSync(process.env.SU_PASS, 10);

  const superuser = await prisma.user.upsert({
    where: { email: process.env.SU_EMAIL },
    update: {},
    create: {
      email: process.env.SU_EMAIL,
      firstname: process.env.SU_FIRSTNAME,
      lastname: process.env.SU_LASTNAME,
      password: passwordHash,
      isActive: true,
    },
  });

  console.log({ superuser });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
