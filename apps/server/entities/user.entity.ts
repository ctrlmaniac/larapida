import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamps } from './timestamps.entity';

@Entity()
export class User extends Timestamps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}
