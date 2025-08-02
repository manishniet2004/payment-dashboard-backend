// src/payments/payments.controller.ts

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  findAll() {
    // Yahan filters aur pagination bhi aayenge
    return this.paymentsService.findAll();
  }

  @Get('stats')
  getStats() {
    return this.paymentsService.getStats();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(+id);
  }

  @Post()
  create(@Body() payment: any) {
    return this.paymentsService.create(payment);
  }
}