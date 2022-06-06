import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Master } from "./Master.entity";
import { Role } from "./Role.entity";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ferstname: string;

  @Column()
  lastname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Master, (master) => master.user)
  master: Master[];

  
  @ManyToOne(() => Role, (role) => role.user)
  role: Role;
}
