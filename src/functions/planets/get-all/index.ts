import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/planets-get-all.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'planet',
                cors: true
            }
        }
    ]
};
