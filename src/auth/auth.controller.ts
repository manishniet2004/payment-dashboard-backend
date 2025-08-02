// src/auth/auth.controller.ts

import { Controller, Request, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // Yahan 'auth' likha hona chahiye
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login') // Yahan 'login' likha hona chahiye
  async login(@Request() req) {
    const user = await this.authService.validateUser(req.body.username, req.body.password);
    
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }
}