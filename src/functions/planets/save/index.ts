import { handlerPath } from '@libs/handlerResolver';
import schema from '@schemas/planet.schema';

export default {
  handler: `${handlerPath(__dirname)}/planets-save.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'planet',
        cors: true,
        request: {
          schemas: {
            'application/json': schema
          }
        }
      }
    }
  ]
};
