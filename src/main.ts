import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import config from './configs/swagger-config';
import * as chalk from 'chalk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.setGlobalPrefix('api');
  app.enableCors();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);

  await app.listen(port, () =>
    console.log(
      chalk.bgGreenBright.black(` Server has been started at port ${port} `),
    ),
  );
}
bootstrap();
