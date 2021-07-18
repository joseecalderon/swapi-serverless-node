import * as uuid from 'uuid';
import { DynamoDB } from 'aws-sdk';
import { formatJSONResponse } from '@libs/apiGateway';
import type { Response } from '@libs/apiGateway';
import type { Planetas } from '@interfaces/planets';
import { Config } from '@config/constants/config';
import { middyfy } from '@libs/lambda';
import type { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';


const dynamoDb = new DynamoDB.DocumentClient();

const createPlanet = async (event, context, callback): Promise<Response> => {
    try {
        console.log('[createPlanet] request: ', {event, context, callback});
        const headers = event.headers;
        const timestamp = new Date().getTime();
        let requestBody: Partial<Planetas> = event.body;

        if (headers['Content-Type'] !== 'application/json') {
            requestBody = JSON.parse(event.body);
        }

        const params: DocumentClient.PutItemInput = {
            TableName: Config.DYNAMODB_TABLE,
            Item: {
                id: uuid.v1(),
                fecha_edicion: null,
                fecha_creacion: timestamp,
                ...requestBody
            } as Partial<Planetas>
        };

        await dynamoDb.put(params).promise();

        return formatJSONResponse(params.Item, 201);
    } catch (error) {
        console.error('ERROR [createPlanet]: ', error);
        return formatJSONResponse({ error: error.message || 'Error al crear el planeta' }, 500);
    }
};

export const main = middyfy(createPlanet);