import { Server } from "http";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Context } from "aws-lambda";
import * as serverlessExpress from 'aws-serverless-express';
import * as express from 'express';
import {ExpressAdapter} from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

let lambdaProxy: Server;

async function bootstrap() {
    const expressServer = express();
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressServer));
    nestApp.enableCors();

    const functionLambda = "PersonaApi";
    const config = new DocumentBuilder()
    .setTitle(functionLambda)
    .setDescription(`${functionLambda} test`)
    .setVersion('1.0')
    .addTag(functionLambda)
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(nestApp, config);
    SwaggerModule.setup('doc/swagger', nestApp, document);

    await nestApp.init();

    return serverlessExpress.createServer(expressServer);
}

export const handler = (event: any, context: Context) => {

    if (!lambdaProxy) {
        bootstrap().then((server) => {
            lambdaProxy = server;
            serverlessExpress.proxy(lambdaProxy, event, context);
        });
    } else {
        serverlessExpress.proxy(lambdaProxy, event, context);
    }
}