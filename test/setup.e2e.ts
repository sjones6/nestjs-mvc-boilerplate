/// <reference path="./global.d.ts" />

import { bootstrap } from '../src/bootstrap';
import { before } from 'mocha';

before(async () => {
  if (global.app) {
    return;
  }
  global.app = await bootstrap();
  await global.app.init();
});