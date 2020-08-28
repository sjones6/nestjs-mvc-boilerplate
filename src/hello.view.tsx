import { h } from 'nest-jsx-template-engine';
import { MainLayout } from '@layouts/main';
import { App } from '@interfaces/render';

export interface IHelloProps {
  name: string;
}

export function Hello(data: IHelloProps, props: App.RenderProps) {
  return (
    <MainLayout title="Hello World" {...props}>
      {data.name}
    </MainLayout>
  );
}
