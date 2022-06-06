import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Subject } from "./Subject.entity";

@Entity()
export class Operation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;



    @ManyToOne(() => Subject, (subject) => subject.operation)
    subject : Subject;

}
