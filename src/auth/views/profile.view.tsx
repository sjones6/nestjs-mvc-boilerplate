import { h } from 'nest-jsx-template-engine';
import { MainLayout } from '@layouts/main';
import { User } from 'src/users/user.entity';
import { App } from '@interfaces/render';

export function Profile(user: User, props: App.RenderProps) {
  return <MainLayout title='Profile' {...props}>
     Hey,             {user.email}!
  </MainLayout>
}