import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subject } from "./Subject.entity";
import { User } from "./User.entity";

@Entity()
export class Master extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    starttime: number;

    @Column()
    startminutes: number;

    @Column()
    endtime: number;

    @Column()
    endminutes: number;


    @Column()
    totalhours: number;

    @Column()
    description: string;


    @ManyToOne(() => Subject, (subject) => subject.master)
    subject: Subject


    @ManyToOne(() => User, (user) => user.master)
    user: User



}
