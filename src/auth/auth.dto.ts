export class RegisterDto {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
}

export class LoginDto {
  password: string;
  email: string;
}
