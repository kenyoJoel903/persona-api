import { Module } from '@nestjs/common';
import { BusinessModule } from 'src/business/business.module';
import { PersonaController } from './controller/persona.controller';
import { PersonaJoService } from './service/persona.jo.service';

@Module({
    controllers: [PersonaController],
    imports: [BusinessModule],
    providers: [PersonaJoService]
})
export class JourneyModule {}
