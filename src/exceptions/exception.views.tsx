import { h } from 'nest-jsx-template-engine';
import { MainLayout } from '@layouts/main';
import { App } from '@interfaces/render';
import { HttpException } from '@nestjs/common';

export interface IExceptionData {
  statusCode: number;
  timestamp: string;
  path: string;
  exception: HttpException;
}

export function Generic(data: IExceptionData, props: App.RenderProps) {
  return (
    <MainLayout title="Whoops!" {...props}>
      <h1>Whoops! We've encountered an unexpected error!</h1>
    </MainLayout>
  );
}

export function NotFound(data: IExceptionData, props: App.RenderProps) {
  return (
    <MainLayout title="Not Found!" {...props}>
      <h1>It seems you might be lost.</h1>
    </MainLayout>
  );
}

export function Forbidden(data: IExceptionData, props: App.RenderProps) {
  return (
    <MainLayout title="Forbidden!" {...props}>
      <h1>You are not permitted to perform that action.</h1>
    </MainLayout>
  );
}
