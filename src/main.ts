import { bootstrap } from './bootstrap'

/**
 * Turn the lights on
 */
bootstrap()
  .then(app => {
    return app.listen(process.env.PORT || 3000);
  });
