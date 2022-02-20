import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";
import mongoose from "mongoose";




const startServer = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    
    await server.start();
    server.applyMiddleware({ app })

    await mongoose.connect("mongodb://localhost:27017/test3");

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
};

startServer();