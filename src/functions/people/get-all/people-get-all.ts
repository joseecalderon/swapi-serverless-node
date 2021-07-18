import { handleError } from '@config/utils/handleError';
import { middyfy } from '@libs/lambda';
import { get } from '@config/http/http';
import { Config } from '@config/constants/config';
import { formatJSONResponse, Response } from '@libs/apiGateway';
import { parsePeople } from '@config/utils/parsePeople';

const getAllPeople = async (event, context, cb): Promise<Response> => {
    try {
        console.log('[getOnePlanet] request', { event, context, cb });

        const { data } = await get(`${Config.SWAPI_PATH}/people`);

        return formatJSONResponse(parsePeople(data.results || []), 200);
    } catch (error) {
        return handleError(error);
    }
};

export const main = middyfy(getAllPeople);
