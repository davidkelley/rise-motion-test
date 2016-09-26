# Lambda API

I have decided to compose the back-end service as a set of Lambda functions that provide integration with the Dailymotion API.

As the position I have applied for is a back-end Node.js developer, I felt it necessary to implement some sort of back-end service -- despite the fact that it is not necessarily required to access the Dailymotion API.

As I have already deployed the functions to AWS, it is not necessary to deploy them yourself. However, I have documented the process below. Once deployed to your own endpoint, you will need to update the endpoints in the client.

## Getting Started

You can either run `docker pull davidkelley/rise-motion:api-v0.0.0` or build the container yourself with the following command `docker build -t davidkelley/rise-motion:api-v0.0.0 .` from inside the `api/` directory.

_When building the container on your local machine, you can supply a `$ver` arg to configure which release of Serverless is installed globally._

## Deploying the functions

You can use the container to deploy the functions to AWS using the commands below.

```
docker run -e AWS_SECRET_ACCESS_KEY=__SECRET__ -e AWS_ACCESS_KEY_ID=__ID__ davidkelley/rise-motion:api-v0.0.0 serverless deploy
```

**Note:** It will deploy the function to `us-east-1`.

## Testing the functions

Tests are executed using Mocha and the Serverless plugin, `serverless-mocha-plugin`. You can run the tests using the below command.

```
docker run davidkelley/rise-motion:api-v0.0.0 serverless invoke test -f related -f search -f video
```
