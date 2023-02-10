import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { FastifyPluginOptions } from "fastify/types/plugin";
import httpStatus from "http-status";

import { FastifyPluginDoneFunction } from "../types/global.types";
import HerosConfig from "../../assets/heros.json";
import ClientError from "../error";

export default (
  instance: FastifyInstance,
  _opts: FastifyPluginOptions,
  done: FastifyPluginDoneFunction
): void => {
  instance.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    const id = Math.floor(Math.random() * HerosConfig.length);

    console.log("id", id);

    res.status(httpStatus.OK).send(HerosConfig[id]);
  });

  instance.get("/names", async (req: FastifyRequest, res: FastifyReply) => {
    const names = HerosConfig.map((hero) => hero.name);

    res.status(httpStatus.OK).send(names);
  });
  done();
};

export const autoPrefix = "/heros";
