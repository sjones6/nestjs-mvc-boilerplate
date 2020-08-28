import { h } from 'nest-jsx-template-engine';
import { MainLayout } from '@layouts/main';
import { TextInput, PasswordInput } from '@components/inputs';
import { LoginDto } from '../auth.dto';
import { App } from '@interfaces/render';

export interface ILoginProps extends App.RenderProps {
  $old: LoginDto;
}

export function Login(data: any, props: ILoginProps) {
  return (
    <MainLayout title="Login" {...props}>
      <form class="flex flex-col pt-3 md:pt-8" action="/login" method="post">
        <div class="flex flex-col pt-4">
          <label for="email" class="text-lg">
            Email
          </label>
          <TextInput
            type="email"
            name="email"
            value={props.$old.email}
            placeholder="your@email.com"
          />
        </div>

        <div class="flex flex-col pt-4">
          <label for="password" class="text-lg">
            Password
          </label>
          <PasswordInput name="password" value="" placeholder="Password" />
        </div>

        <TextInput
          type="hidden"
          value={props.$session.csrfToken}
          name="_csrf"
        />

        <input
          type="submit"
          value="Log In"
          class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
        />
      </form>
      <div class="text-center pt-12 pb-12">
        <p>
          Don't have an account?{' '}
          <a href="/register" class="underline font-semibold">
            Register here.
          </a>
        </p>
      </div>
    </MainLayout>
  );
}
