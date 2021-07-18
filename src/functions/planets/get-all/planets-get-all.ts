import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { DynamoDB } from 'aws-sdk';
import { TableName } from '@config/constants/config';
import type { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';

const dynamoDb = new DynamoDB.DocumentClient();

const getAllPlanets = async (event, context, callback) => {
    try {
        console.log('[getAllPlanets] request: ', {event, context, callback});

        const params: DocumentClient.ScanInput = {
            TableName
        };

        const result = await dynamoDb.scan(params).promise();

        return formatJSONResponse(result.Items, 200);
    } catch (error) {
        console.error('ERROR [getAllPlanets]: ', error);
        return formatJSONResponse({ error: error.message || 'Error al crear el planeta' }, 500);
    }

};

export const main = middyfy(getAllPlanets);
