import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity({ name: 'meetings' })
export class Meeting {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  zoomUrl: string

  @ManyToMany(()=>Employee,employee=>employee.meetings)
  employee:Employee
}
