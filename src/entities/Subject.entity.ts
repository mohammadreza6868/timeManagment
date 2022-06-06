import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Master } from "./Master.entity";
import { Operation } from "./Operation.entity";

@Entity()
export class Subject extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;



    @OneToMany(() => Master, (master) => master.subject)
    master: Master[]


    @OneToMany(() => Operation, (Operation) => Operation.subject)
    operation: Operation[];

}
