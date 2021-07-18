import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/planets-put.main`,
    events: [
        {
            http: {
                method: 'put',
                path: 'planet/{id}',
                cors: true
            }
        }
    ]
};
