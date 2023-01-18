import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//db module
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'School',
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
