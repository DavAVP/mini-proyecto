import { table } from "console";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tarea {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    materia: string;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    estado: boolean;

    @ManyToOne(() => User, (user) => user.tareas)
    user: User;
}
