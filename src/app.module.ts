// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module'; // Yeh line zaroori hai
import { PaymentsModule } from './payments/payments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, PaymentsModule, UsersModule], // Aur AuthModule yahan imports array mein hona chahiye
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}