import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasModule } from './tareas/tareas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './tareas/entities/tarea.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5436,
      username: 'postgres',
      password: 'postgres',
      database: 'monolitoDB',
      entities:[Tarea],
      synchronize: true,
    }),
    TareasModule],
  controllers: [AppController],
  providers: [AppService]

})
export class AppModule {}
