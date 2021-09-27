import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(helmet());
  await app.listen(port);
  Logger.log(`App listening on port ${port}`);
  Logger.log(`App listening on port http://localhost:${port}`);
}
bootstrap();
