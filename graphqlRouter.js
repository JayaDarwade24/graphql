const { Router } = require('express');
// const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const graphqlRouter = Router();

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
// });

// async function startApolloServer() {
//     await server.start();
//     server.applyMiddleware({ app: graphqlRouter });
// }

// startApolloServer();

module.exports = graphqlRouter;
