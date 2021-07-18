import type { AWS } from '@serverless/typescript';
import { Config, TableName } from '@config/constants/config';

import { default as Functions} from '@functions/index';

const serverlessConfiguration: AWS = {
  service: Config.SERVICE_NAME,
  // disabledDeprecations: '*',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    jest: {
      collectCoverage: true
    },
    // dynamodb: {
    //   stages: ['dev'],
    //   start: {
    //     port: 8000,
    //     inMemory: true,
    //     heapInitial: '200m',
    //     heapMax: '1g',
    //     migrate: true,
    //     seed: true,
    //     convertEmptyValues: true
    //   }
    // }
  },
  plugins: [
    'serverless-webpack',
    'serverless-dynamodb-local',
    'serverless-offline',
    'serverless-jest-plugin',
    'serverless-stack-output'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'us-east-1',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      DYNAMODB_TABLE: TableName
    },
    lambdaHashingVersion: '20201221',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: [
              'dynamodb:Query',
              'dynamodb:Scan',
              'dynamodb:GetItem',
              'dynamodb:PutItem',
              'dynamodb:UpdateItem',
              'dynamodb:DeleteItem'
            ],
            Resource: '*'
          }
        ]
      }
    },
  },
  package: {
    individually: true
  },
  // import lambda functions
  functions: Functions,
  resources: {
    Resources: {
      TodosDynamoDbTable: {
        Type: 'AWS::DynamoDB::Table',
        DeletionPolicy: 'Retain',
        Properties:{
          AttributeDefinitions:[
            {
              AttributeName: 'id',
              AttributeType: 'S',
            }
          ],
          KeySchema: [
            {
              AttributeName: 'id',
              KeyType: 'HASH'
            }
          ],  
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
          },
          TableName: TableName
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
