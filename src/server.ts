import "reflect-metadata";
import "./utils/connection";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import ToolResolver from "./graphql/tool/ToolResolver";

async function bootstrap() {

  const schema = await buildSchema({
    resolvers: [ToolResolver]
  })

  const server = new ApolloServer({ schema });
  server.listen({ port: 4100 }).then(() => {
    console.log('Running')
  })
}

bootstrap();