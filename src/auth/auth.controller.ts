import { Controller, Get, Post, Body, Res, Req, UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Render } from 'nest-jsx-template-engine';
import {
  Login,
  ILoginProps,
  Register,
  IRegisterProps,
  Profile,
  IProfileProps
} from './views/index'
import { RegisterDto, LoginDto } from './auth.dto';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { AuthenticatedGuard } from 'src/guards/authenticated.guard';
import { User } from 'src/users/user.entity';

@Controller('')
export class AuthController {

  constructor(private readonly usersService: UsersService, private readonly authService: AuthService) { }

  @Get('/login')
  @Render<ILoginProps>(Login)
  getLogin(): Partial<ILoginProps> {
    return {}
  }

  @Post('/login')
  async doLogin(@Body() body: LoginDto, @Res() res: Response, @Req() req: Request): Promise<void> {
    const user: User = await this.authService.verifyCredentisl(body.email, body.password);
    req.session.user_id = user.id;
    req.flash('success', 'You\'re logged in!');
    res.redirect(302, '/profile');
  }

  @Get('/profile')
  @UseGuards(AuthenticatedGuard)
  @Render<IProfileProps>(Profile)
  onLogin(@Req() req: Request): Partial<IProfileProps> {
    return { user: req.user };
  }

  @Get('/register')
  @Render<IRegisterProps>(Register)
  getRegister(@Req() req): void { }

  @Post('/register')
  async doRegister(@Body() body: RegisterDto, @Res() res: Response): Promise<void> {
    await this.authService.createUser({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      password: body.password
    });
    res.redirect(302, '/login');
  }

  @Get('/logout')
  async doLogout(@Res() res: Response, @Req() req: Request): Promise<void> {
    await new Promise((resolve, reject) => {
      req.session.destroy(err => err ? reject(err) : resolve());
    });
    res.redirect(302, '/login');
  }
}