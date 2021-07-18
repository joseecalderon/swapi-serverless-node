import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/people-get-one.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'people/{id}',
                cors: true
            }
        }
    ]
};
