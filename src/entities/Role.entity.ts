import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    rolename:string;



    @OneToMany(() => User, (user) => user.role)
    user: User[];

}
