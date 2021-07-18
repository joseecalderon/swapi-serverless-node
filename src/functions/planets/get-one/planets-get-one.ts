import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { DynamoDB } from 'aws-sdk';
import { Config } from '@config/constants/config';
import type { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';

const dynamoDb = new DynamoDB.DocumentClient();

const getOnePlanet = async (event, context, callback) => {
    try {
        console.log('[getOnePlanet] request: ', {event, context, callback});

        const { id: planetId }: { id: string } = event.pathParameters;

        const params: DocumentClient.GetItemInput = {
            TableName: Config.DYNAMODB_TABLE,
            Key: {
              id: planetId || 1
            }
        };

        const result = await dynamoDb.get(params).promise();

        return formatJSONResponse({data: result.Item}, 200);
    } catch (error) {
        console.error('ERROR [getOnePlanet]: ', error);
        return formatJSONResponse({ error: error.message || 'Error al crear el planeta' }, 500);
    }
};

export const main = middyfy(getOnePlanet);