import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";

const saltRounds = 12;
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(process.env.SU_PASSWORD, salt);

export const superusers: Prisma.UserCreateInput[] = [
  {
    email: process.env.SU_EMAIL,
    password: hash,
    firstName: process.env.SU_FNAME,
    lastName: process.env.SU_LNAME
  }
];
