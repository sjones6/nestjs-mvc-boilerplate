import { h } from 'nest-jsx-template-engine';
import { MainLayout } from '@layouts/main';
import { User } from 'src/users/user.entity';
import { App } from '@interfaces/render';

export interface IProfileProps extends App.RenderProps {
  user: User
}

export function Profile(props: IProfileProps) {
  return <MainLayout title="Login" {...props}>
     Hey, {props.user.email}!
  </MainLayout>
}