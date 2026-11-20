import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  // För att kunna prova anrop från frontend
  app.enableCors();
  // Körs via port 3000 eller det som angits i .env filen
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
