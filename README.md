# RISE Project Tech Test

This technical test is composed of two parts, a client and a back-end API. Each part has an accompanying, custom test suite and is built to run on Docker.

Each folder has a separate `README.md` file that assists you with getting each part up & running with Docker.

## Client

The client is a single-page application that uses API endpoints to communicate with the Dailymotion API. Whilst this is not necessarily required, the position that I applied for is a back-end Node.js developer so I thought it best to incorporate a back-end component.

![IMDB Bot](https://github.com/davidkelley/rise-motion-test/blob/master/.github/images/demo.gif?raw=true "RISE Motion")

## API

The API is built on the Serverless v1.0 framework and is deployed to AWS Lambda. It contains three endpoints, one to search for videos, one to retrieve a particular video and another to retrieve related videos.

Pagination headers are also fed back through API Gateway, in-order to demonstrate a commonly accepted workaround for Lambda functions returning response headers.

---

Each folder has a separate `README.md` file that assists you with getting the test up & running.
