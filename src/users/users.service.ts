import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UserRepository,
  ) {}

  async create(user: Partial<User>): Promise<User> {
    return this.usersRepository.save(user);
  }

  findAll(query?: Partial<User>): Promise<User[]> {
    return this.usersRepository.find(query);
  }

  findById(id: number): Promise<User> {
    return this.usersRepository.findOneOrFail(id);
  }

  findOne(query: Partial<User>): Promise<User> {
    return this.usersRepository.findOne(query)
  }

  async updateOne(id: number, update: Partial<User>): Promise<User> {
    await this.usersRepository.update(id, update);
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}