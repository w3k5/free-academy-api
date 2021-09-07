import { DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('Free Academy')
  .setVersion('1.0')
  .addTag('free-academy')
  .build();

export default config;
