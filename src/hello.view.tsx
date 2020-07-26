import { h, JSXTemplate } from 'nest-jsx-template-engine';
import { MainLayout } from '@layouts/main';
import { App } from '@interfaces/render'

export interface IHelloProps extends App.RenderProps {
  name: string
}

export function Hello(props: IHelloProps) {
  return <MainLayout title="Hello World" {...props}>
    {props.name}
  </MainLayout>
}