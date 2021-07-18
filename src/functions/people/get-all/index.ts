import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/people-get-all.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'people',
                cors: true
            }
        }
    ]
};
