import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module';

@Module({
  
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
    isGlobal: true,
  }),
  MongooseModule.forRoot(process.env.MONGODB)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
