import type { AWS } from '@serverless/typescript';
import { Config } from '@config/constants/config';

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
    }
  },
  plugins: ['serverless-webpack', 'serverless-offline', 'serverless-dynamodb-local', 'serverless-jest-plugin'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      DYNAMODB_TABLE: Config.DYNAMODB_TABLE
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
    lambdaHashingVersion: '20201221',
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
          TableName: Config.DYNAMODB_TABLE
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
