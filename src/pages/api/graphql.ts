import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/typeDefs";
import { ApolloServer } from "apollo-server-micro";
import type { NextApiRequest, NextApiResponse, PageConfig } from "next";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
