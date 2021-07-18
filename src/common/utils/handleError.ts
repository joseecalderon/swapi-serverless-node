import type { AxiosError } from 'axios';
import type { Response } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';

export function handleError(err: AxiosError): Response {
    const error: Record<string, any> = {
        status: err.response.status || 500,
        message: err.message
    };

    // Imprimiendo el error
    console.error(`Ocurrió un error (${error.status}): ${err.message}`);

    return formatJSONResponse(error, error.status);
}
