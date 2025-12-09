import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() 
    createTareaDto: CreateTareaDto, 
    @Req()
    req: any
  ){
    return this.tareasService.create(createTareaDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: any) {
  return this.tareasService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tareasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTareaDto: UpdateTareaDto) {
    return this.tareasService.update(id, updateTareaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareasService.remove(id);
  }
}
