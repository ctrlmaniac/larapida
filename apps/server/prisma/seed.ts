import { PrismaClient } from './prisma';
import * as bcrypt from 'bcrypt';

const categories = [
  {
    name: 'Riparazioni',
    slug: 'riparazioni',
  },
  {
    name: 'Duplicazione Chiavi',
    slug: 'chiavi',
  },
  {
    name: 'Duplicazione Chiavi Auto',
    slug: 'chiavi-auto',
  },
  {
    name: 'Gusci Chiavi Auto',
    slug: 'gusci-chiavi-auto',
  },
  {
    name: 'Duplicazione Radiocomandi',
    slug: 'radiocomandi',
  },
  {
    name: 'Batterie per orologi e altro',
    slug: 'batterie',
  },
  {
    name: 'Targhe',
    slug: 'targhe',
  },
  {
    name: 'Accessori calzature',
    slug: 'accessori-calzature',
  },
];

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

  for (const category of categories) {
    const newCategory = await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: {
        name: category.name,
        slug: category.slug,
      },
    });

    console.log({ newCategory });
  }
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
