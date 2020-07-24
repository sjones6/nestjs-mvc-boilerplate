import { Injectable } from '@nestjs/common';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

const SALT_ROUNDS = 10;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
  ) {}

  async createUser(user: Partial<User>): Promise<User> {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    }
    return this.usersService.create(user);
  }

  async verifyCredentisl(email: string, password: string): Promise<User> {
    const user = await this.usersService.findOne({ email });
    if (!user) {
      throw new Error('email/password combination invalid');
    }
    const passwordsMatch: boolean = await bcrypt.compare(password, user.password);
    if (!passwordsMatch) {
      throw new Error('email/password combination invalid');
    }
    return user;
  }
}