import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateTareaDto {
    
    @IsString()
    @IsNotEmpty()
    materia: string;

    @IsString()
    @IsNotEmpty()
    titulo: string;
    
    @IsString()
    @IsNotEmpty()
    descripcion: string;
    
    @IsBoolean()
    @IsNotEmpty()
    estado: boolean;
}
