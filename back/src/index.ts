import fastify from "fastify";
import fastifyAutoload from "@fastify/autoload";
import * as path from "path";
import fastifyCors from "@fastify/cors";

import { UserInfos } from "./types/global.types";

const server = fastify();

declare module "fastify" {
  interface FastifyRequest {
    user: UserInfos | undefined;
  }
}

const main = async () => {
  server.register(fastifyAutoload, {
    dir: path.join(__dirname, "routes"),
  });

  server.register(fastifyCors, {
    credentials: true,
    origin: "http://localhost:3000",
  });

  server.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

main().catch((e) => {
  throw e;
});
