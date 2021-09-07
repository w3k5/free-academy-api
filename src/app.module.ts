import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import typeOrmConfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
