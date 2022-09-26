import { env } from "process";

//https://docs.nestjs.com/techniques/database
export const ConexionPgDb = {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'personadb'
};