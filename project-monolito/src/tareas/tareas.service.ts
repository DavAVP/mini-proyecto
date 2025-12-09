import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarea } from './entities/tarea.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TareasService {
  @InjectRepository(Tarea)
  private readonly tareaRepository: Repository<Tarea>;

  async create(createTareaDto: CreateTareaDto, userId: string) {
    const tarea = await this.tareaRepository.create({
      ...createTareaDto,
      user: { id: userId }
    });
    return await this.tareaRepository.save(tarea);
  }

  async findAll(userId: string) {
    return await this.tareaRepository.find({
      where: {
        user: { id: userId }
      }
    });
  }

  async findOne(id: string) {
    const tarea = await this.tareaRepository.findOneBy({id});

    if(!tarea){
      return 'no existe la tarea';
    }
    return tarea;
  }

  async update(id: string, updateTareaDto: UpdateTareaDto) {
    const tarea = await this.tareaRepository.findOneBy({id});
    
    if(!tarea){
      return 'no existe la tarea';
    }

    await this.tareaRepository.update(id, updateTareaDto);
    

  }

  async remove(id: string) {
    const tarea = await this.tareaRepository.findOneBy({id});
    
    if(!tarea){
      return 'no existe la tarea';
    }

    await this.tareaRepository.softDelete(id);
    return 'tarea eliminada';
  }
}
