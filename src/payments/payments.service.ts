// src/payments/payments.service.ts

import { Injectable } from '@nestjs/common';

// Mock payments data
const payments = [
  {
    id: 1,
    amount: 50.00,
    method: 'credit_card',
    receiver: 'Alice',
    status: 'success',
    date: new Date('2025-08-01T10:00:00Z'),
  },
  {
    id: 2,
    amount: 75.50,
    method: 'paypal',
    receiver: 'Bob',
    status: 'pending',
    date: new Date('2025-08-01T11:00:00Z'),
  },
  {
    id: 3,
    amount: 25.00,
    method: 'debit_card',
    receiver: 'Charlie',
    status: 'failed',
    date: new Date('2025-07-31T15:00:00Z'),
  },
];

@Injectable()
export class PaymentsService {
  findAll(): any[] {
    return payments;
  }

  findOne(id: number): any {
    return payments.find(p => p.id === id);
  }

  create(payment: any): any {
    const newPayment = {
      id: payments.length + 1,
      date: new Date(),
      ...payment,
    };
    payments.push(newPayment);
    return newPayment;
  }

  getStats() {
    // Stats logic yahan aayega
    return {
      totalRevenue: 1000,
      totalTransactions: 50,
      failedTransactions: 5,
    };
  }
}