import { handleError } from '@config/utils/handleError';
import { middyfy } from '@libs/lambda';
import { get } from '@config/http/http';
import { Config } from '@config/constants/config';
import { formatJSONResponse, Response } from '@libs/apiGateway';
import { parsePeople } from '@config/utils/parsePeople';

const getOnePerson = async (event, context, cb): Promise<Response> => {
    try {
        console.log('[getOnePerson] request', { event, context, cb });

        const { id: personId }: { id: string } = event.pathParameters;

        const response = await get(`${Config.SWAPI_PATH}/people/${personId}`);

        return formatJSONResponse( { data: parsePeople(response.data) }, 200);
    } catch (error) {
        return handleError(error);
    }
};

export const main = middyfy(getOnePerson);
