import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user/user.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5342,
    username:'postgres',
    password:'admin',
    entities:[User],
    synchronize:true
  }),
  TypeOrmModule.forFeature([User]),
],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
