import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConexionPgDb } from 'src/constants/conexion_db';
import { Persona } from 'src/entities/persona.entity';
import { PersonaDao } from './dao/persona.dao';
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
        TypeOrmModule.forFeature([Persona])
    ],
    providers: [PersonaDao, PersonaCoService],
    exports: [PersonaCoService]
})
export class CoreModule {}
