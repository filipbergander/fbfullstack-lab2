import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  // För att kunna prova anrop från frontend
  //app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
