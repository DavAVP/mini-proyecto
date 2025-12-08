import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
