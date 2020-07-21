# nest-mvc-boilerplate

There's a lot more to a full-stack Nestjs application that just a templating engine.

## Features

* [Stongly-types views](https://www.npmjs.com/package/nest-jsx-template-engine) via JSX
* [TypeORM](https://typeorm.io/#/)
* Migrations
* Cookie-based Sessions (authentication, OAuth, flash messages, CSRF protection)
* [AlpineJS](https://github.com/alpinejs/alpine) for client-side JS
* [Tailwind](https://tailwindcss.com/) for styles
* [Turbolinks](https://github.com/turbolinks/turbolinks) for fast page navigation
* dotenv for environment management
* [mocha](https://mochajs.org/) as the test-runner

## Templating

This boilerplate takes a different stance with it's templating engine.

## Swapping the Persistance Layer

By default, the boilerplate starts with SQLlite, so it doesn't have any extra runtime dependencies.  You can easily change this to something else.

Update the `ormconfg.json` `type` property. Be sure to `npm install` the appropriate driver (and uninstall the SQLlite driver).

## TODO

**General**
[] templating engine
[] dotenv
[] tailwind
[] alpinejs
[] turbolinks

**DB**
[] TypeORM
[] User entity
[] SQLlite
[] migrations

**Sessions**
[] plumbing
[] local auth
[] Github OAuth
[] flash messages
[] CSRF protection
