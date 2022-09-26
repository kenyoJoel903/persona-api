import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { PersonaBsService } from './service/persona.bs.service';

@Module({
    providers: [PersonaBsService],
    imports: [CoreModule],
    exports: [PersonaBsService]
})
export class BusinessModule {}
