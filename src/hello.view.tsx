import { h } from 'nest-jsx-template-engine';
import { MainLayout } from '@layouts/main';
import { IHelloViewDTO } from './hello.view.dto';

export function Hello(props: IHelloViewDTO) {
  return <MainLayout title="Hello World">
    Hello world
  </MainLayout>
}