# Client

I composed the client application as a single page application that can be compiled and deployed.

## Getting Started

Using `docker pull davidkelley/rise-motion:client-v0.0.0` or `docker build -t davidkelley/rise-motion:client-v0.0.0 .` you can build the client container, from inside the `client/` directory.

## Running the Client

Use `docker run -d -p 3000:3000 -p 3001:3001 -p 5000:5000 davidkelley/rise-motion:client-v0.0.0 npm start` to begin the server that hosts the development environment for the client.

## Testing the Client

Use `docker run davidkelley/rise-motion:client-v0.0.0 npm test` to run the small test suite that ensures that the client is rendering elements on the page as expected.
