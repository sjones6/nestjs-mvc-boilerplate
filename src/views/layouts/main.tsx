import { h } from 'nest-jsx-template-engine'
import { Nav } from '@partials/nav';
import { User } from 'src/users/user.entity';
import { ErrorAlert, InfoAlert, SuccessAlert } from '@components/alerts';
import { App } from '@interfaces/render';

interface ILayoutProps extends App.RenderProps {
  title: string,
  children?: any,
}

export function MainLayout(props: ILayoutProps) {
  return <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      <title>{props.title}</title>

      {/* fonts */}
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet"></link>

      {/* default tailwindcss install - for other options see https://tailwindcss.com/docs/installation */}
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />

      {/* turbolinks install - self-inits */}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/turbolinks/5.2.0/turbolinks.js"
        integrity="sha512-G3jAqT2eM4MMkLMyQR5YBhvN5/Da3IG6kqgYqU9zlIH4+2a+GuMdLb5Kpxy6ItMdCfgaKlo2XFhI0dHtMJjoRw=="
        crossorigin="anonymous"
        defer
      >
      </script>

      {/* AlpineJS - self-inits */}
      <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

    </head>

    <body class="bg-gray-100 font-family-karla h-screen" style="font-family: 'Source Sans Pro', sans-serif;">
      <Nav user={props.$session.user} />
      <div class="container mx-auto p-4">
        {props.$session.messages.info ? props.$session.messages.info.map(msg => <InfoAlert message={msg} />) : null}
        {props.$session.messages.error ? props.$session.messages.error.map(msg => <ErrorAlert message={msg} />) : null}
        {props.$session.messages.success ? props.$session.messages.success.map(msg => <SuccessAlert message={msg} />) : null}
        {props.children}
      </div>
    </body>
  </html>
}