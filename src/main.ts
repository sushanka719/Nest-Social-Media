import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT', 7000);

  console.log('Server is running on port', port);
  await app.listen(process.env.PORT ?? 7000);
}

bootstrap();
