import { ConnectionOptions } from 'typeorm';

const typeOrmConfig: ConnectionOptions = {
  // type: 'mongodb',
  // host: 'localhost',
  // port: 5432,

  // database: 'loans',
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // synchronize: false,
  // migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  // cli: {
  //   migrationsDir: 'src/migrations',
  // },
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'academy',
  synchronize: true,
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};

export default typeOrmConfig;
