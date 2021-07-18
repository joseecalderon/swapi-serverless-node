import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/films-get-one.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'films/{id}',
                cors: true
            }
        }
    ]
};
