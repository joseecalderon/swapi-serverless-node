import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/films-get-all.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'films',
                cors: true
            }
        }
    ]
};
