import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Modules/users/entities/user.entity';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'sushanka@123',
    database: 'SocialSite',
    // entities: [User], //add this line to include the User entity
    autoLoadEntities: true, // This will automatically load entities from the specified paths
    synchronize: true, // This should be false in production
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
