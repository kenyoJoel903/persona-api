import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const functionLambda = "PersonaApi";
  const config = new DocumentBuilder()
  .setTitle(functionLambda)
  .setDescription(`${functionLambda} test`)
  .setVersion('1.0')
  .addTag(functionLambda)
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc/swagger', app, document);
  await app.listen(3000);
}
bootstrap();


//https://github.com/typeorm/typeorm#step-by-step-guide
