/// <reference path="../../test/global.d.ts" />

import request from 'supertest';

describe('AuthController (e2e)', () => {
  it('/login (GET)', () => {
    return request(global.app.getHttpServer())
      .get('/login')
      .expect(200)
      .expect(/Login/);
  });

  it('/register (GET)', () => {
    return request(global.app.getHttpServer())
      .get('/register')
      .expect(200)
      .expect(/register/);
  });
});
