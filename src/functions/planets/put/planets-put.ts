import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { DynamoDB } from 'aws-sdk';
import { Config } from '@config/constants/config';
import { Planetas } from '@interfaces/planets';
import type { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';

const dynamoDb = new DynamoDB.DocumentClient();

const putPlanets = async (event, context, callback) => {
    try {
        console.log('[putPlanets] request: ', {event, context, callback});

        const { id: planetId }: { id: string } = event.pathParameters;

        const headers = event.headers;
        const timestamp = new Date().toJSON();
        let requestBody: Partial<Planetas> = event.body;

        if (headers['Content-Type'] !== 'application/json') {
            requestBody = JSON.parse(event.body);
        }

        const params: DocumentClient.UpdateItemInput = {
            TableName: Config.DYNAMODB_TABLE,
            Key: {
                id: planetId || 1
            },
            ExpressionAttributeValues: {
                ':nombre': requestBody.nombre,
                ':clima': requestBody.clima,
                ':diametro': requestBody.diametro,
                ':gravedad': requestBody.gravedad,
                ':periodo_orbital': requestBody.periodo_orbital,
                ':poblacion': requestBody.poblacion,
                ':residentes': requestBody.residentes,
                ':periodo_rotacion': requestBody.periodo_rotacion,
                ':superficie_agua': requestBody.superficie_agua,
                ':terreno': requestBody.terreno,
                ':fecha_edicion': timestamp,
                ':peliculas': requestBody.peliculas,
            },
            UpdateExpression: `SET nombre = :nombre,
                                    clima = :clima,
                                    diametro = :diametro,
                                    gravedad = :gravedad,
                                    periodo_orbital = :periodo_orbital,
                                    poblacion = :poblacion,
                                    residentes = :residentes,
                                    periodo_rotacion = :periodo_rotacion,
                                    superficie_agua = :superficie_agua,
                                    terreno = :terreno,
                                    fecha_edicion = :fecha_edicion,
                                    peliculas = :peliculas`,
            ReturnValues: 'ALL_NEW'
        };

        const response = await dynamoDb.update(params).promise();

        return formatJSONResponse(response.Attributes, 200);
    } catch (error) {
        console.error('ERROR [putPlanets]: ', error);
        return formatJSONResponse({ error: error.message || 'Error al crear el planeta' }, 500);
    }
};

export const main = middyfy(putPlanets);