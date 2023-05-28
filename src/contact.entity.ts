import { Employee } from './employee.entity';
import { Column, Entity, PrimaryGeneratedColumn,OneToOne,JoinColumn } from "typeorm";

@Entity()
export class Contact{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    phone:string

    @Column({nullable:true})
    email:string

    @OneToOne(()=>Employee,employee=>employee.contact,{onDelete:"CASCADE"})
    @JoinColumn()
    employee:Employee


}