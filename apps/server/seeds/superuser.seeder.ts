import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { constants } from '@larapida/server-config';

export default class SuperUserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User);

    try {
      const existingSuperuser = await userRepository.findOneBy({
        email: process.env.SU_EMAIL,
      });

      if (!existingSuperuser) {
        const salt = await bcrypt.genSalt(constants.saltRounds);
        const hashedPassword = await bcrypt.hash(
          process.env.SU_PASS as string,
          salt
        );

        const superuser = new User();

        superuser.email = process.env.SU_EMAIL as string;
        superuser.password = hashedPassword;
        superuser.firstName = process.env.SU_FIRSTNAME as string;
        superuser.lastName = process.env.SU_LADSTNAME as string;
        superuser.isActive = true;

        await userRepository.save(superuser);
        console.log(
          `Superuser with email '${process.env.SU_EMAIL as string}' created.`
        );
      }
    } catch (error) {
      console.error('Error seeding superuser:', error);
    }
  }
}
