import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/planets-get-one.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'planet/{id}',
                cors: true
            }
        }
    ]
};
