import { h } from 'nest-jsx-template-engine';
import { MainLayout } from '@layouts/main';

interface IProfileProps {
  email?: number
}

export function Profile(props: IProfileProps) {
  return <MainLayout title="Login">
     Hey, {props.email}!
     <a href="/logout">Logout</a>
  </MainLayout>
}