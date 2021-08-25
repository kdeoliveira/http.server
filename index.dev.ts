import "reflect-metadata"
import ApolloServer from "./src";
import express from "express";
import {buildSchemaSync} from "type-graphql";
import { PersonResolver } from "./src/test.resolver";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
const main = async () => {

    const schema = buildSchemaSync({
        resolvers: [PersonResolver]
    })
    
    const server = new ApolloServer({
        context: ({req}) => ({req}),
        schema
    });
    
    await server.start();
    
    server.applyMiddleware({app, cors: {
        credentials: true,
        origin: "*"
    }, bodyParserConfig: true});
    
    app.listen(9000, () => console.log("STARTED"));
}

main();