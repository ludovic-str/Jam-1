import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { FastifyPluginOptions } from "fastify/types/plugin";
import httpStatus from "http-status";

import { FastifyPluginDoneFunction } from "../types/global.types";

export default (
  instance: FastifyInstance,
  _opts: FastifyPluginOptions,
  done: FastifyPluginDoneFunction
): void => {
  instance.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    res.status(httpStatus.OK).send("Hello world !!!");
  });
  done();
};

export const autoPrefix = "/";
