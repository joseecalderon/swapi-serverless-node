import { handleError } from '@config/utils/handleError';
import { middyfy } from '@libs/lambda';
import { get } from '@config/http/http';
import { Config } from '@config/constants/config';
import { formatJSONResponse, Response } from '@libs/apiGateway';
import { parseFilms } from '@config/utils/parseFilms';

const getOneFilm = async (event, context, cb): Promise<Response> => {
    try {
        console.log('[getOneFilm] request', { event, context, cb });

        const { id: personId }: { id: string } = event.pathParameters;

        const response = await get(`${Config.SWAPI_PATH}/films/${personId}`);

        return formatJSONResponse( { data: parseFilms(response.data) }, 200);
    } catch (error) {
        return handleError(error);
    }
};

export const main = middyfy(getOneFilm);
