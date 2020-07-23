# nest-mvc-boilerplate

There is more to a full-stack Nestjs application that just a templating engine.

> :warning: **WIP**: this boilerplate is still in progress. See the [TODO](#todo) for what's left.

## Features

* [Stongly-types views](https://www.npmjs.com/package/nest-jsx-template-engine) via JSX
* [TypeORM](https://typeorm.io/#/) + migrations 
* Cookie-based Sessions (authentication, OAuth, flash messages, CSRF protection)
* [AlpineJS](https://github.com/alpinejs/alpine) for client-side JS
* [Tailwind](https://tailwindcss.com/) for styles
* [Turbolinks](https://github.com/turbolinks/turbolinks) for fast page navigation
* dotenv for environment management
* [mocha](https://mochajs.org/) as the test-runner

## Philosophy

Much of _modern_ application development is complex, requiring layers of dependencies and multiple build jobs. I searched for something that allowed me to build quickly without sacrificing the power required to build a production grade application, and couldn't find something that was both _simple_, _powerful_, and _productive_.

This boilerplate aims at elegant, powerful simplicity.

* Only one running process should be required to power the full-stack for local and production deployment.
* There should be no client-side state to manage, client-side JavaScript to bundle, or (S)CSS to compile.
* Strong-types everywhere - DB entities and their relationships, views, and business logic.
* The application should look and feel like a modern application.
* Code should be robust, resilient, and easily testable.

## Templating

This boilerplate takes a different stance with it's templating engine by using [Stongly-typed views](https://www.npmjs.com/package/nest-jsx-template-engine).

Rather than require a _different_ template compiler which uses yet-another templating syntax, this boilerplate sticks with JSX and `.tsx` files, which ships natively with the TypeScript compiler.

This has a few advantages:

* No extra run-time dependencies - templates compile to pure JS functions at build time
* Fully type-safe views - `.tsx` files support all types
* No reading off the file-system at runtime
* Fails to compile if templates don't exist

However, if you want to switch your template engine, you are free to do so. See the [nestjs docs](https://docs.nestjs.com/techniques/mvc) on how to integrate template engines like Handlebars or Nunjucks.

## Swapping the Persistance Layer

By default, the boilerplate starts with SQLlite, so it doesn't have any extra runtime dependencies.  You can easily change this to something else.

Update the `ormconfg.json` `type` property. Be sure to `npm install` the appropriate driver (and uninstall the SQLlite driver). 

See [TypeORM's docs](https://typeorm.io/#/connection-options) for more details.

(While TypeORM is primarily useful for SQL databases, it does officially support MongoDB. Although, you're probably better using tools which more natively support MongoDB.)

## TODO

**General**
[x] templating engine
[x] dotenv
[x] tailwind
[x] alpinejs
[x] turbolinks

**DB**
[x] TypeORM
[x] User entity
[x] SQLlite
[ ] migrations

**Sessions**
[ ] plumbing
[ ] local auth
[ ] Github OAuth
[ ] flash messages
[ ] CSRF protection

**Application**
[ ] Register
[ ] Login
[ ] Home/Logged-in Screen
