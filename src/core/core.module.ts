import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConexionPgDb } from 'src/constants/conexion_db';
import { Direccion } from 'src/entities/direccion.entity';
import { Persona } from 'src/entities/persona.entity';
import { Telefono } from 'src/entities/telefono.entity';
import { DireccionDao } from './dao/direccion.dao';
import { PersonaDao } from './dao/persona.dao';
import { TelefonoDao } from './dao/telefono.dao';
import { PersonaCoService } from './service/persona.co.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: ConexionPgDb.host,
            port: ConexionPgDb.port,
            username: ConexionPgDb.username,
            password: ConexionPgDb.password,
            database: ConexionPgDb.database,
            autoLoadEntities: true,
            synchronize: true
        }),
        TypeOrmModule.forFeature([Persona, Direccion, Telefono])
    ],
    providers: [PersonaDao, TelefonoDao, DireccionDao, PersonaCoService],
    exports: [PersonaCoService]
})
export class CoreModule {}
