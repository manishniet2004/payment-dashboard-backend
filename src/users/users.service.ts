// src/users/users.service.ts

import { Injectable } from '@nestjs/common';

// Mock users data
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    lastLogin: new Date('2025-08-01T09:00:00Z'),
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    lastLogin: new Date('2025-08-01T10:00:00Z'),
  },
];

@Injectable()
export class UsersService {
  findAll(): any[] {
    return users;
  }

  findOne(id: number): any {
    return users.find(u => u.id === id);
  }

  create(user: any): any {
    const newUser = {
      id: users.length + 1,
      lastLogin: new Date(),
      ...user,
    };
    users.push(newUser);
    return newUser;
  }
}