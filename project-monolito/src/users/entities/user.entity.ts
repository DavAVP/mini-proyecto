import { Tarea } from 'src/tareas/entities/tarea.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Tarea, tarea => tarea.user)
    tareas: Tarea[];
}