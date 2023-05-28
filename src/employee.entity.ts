import { Column, Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Contact } from "./contact.entity";
import { Task } from './Task.entity';
import { Meeting } from './Meeting.entity';

@Entity()
export class Employee{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @ManyToOne(()=>Employee,employee=>employee.directReports,{onDelete:"SET NULL"})
    manager:Employee

    @OneToMany(()=>Employee,employee=>employee.manager)
    directReports:Employee[]

    @OneToOne(()=>Contact,contact=>contact.employee)
    contact:Contact

    @OneToMany(()=>Task,task=>task.employee)
    tasks:Task[]

    @ManyToMany(()=>Meeting,meeting=>meeting.employee)
    @JoinTable()
    meetings:Meeting[]
}