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

    res.status(httpStatus.OK).send(HerosConfig[id]);
  });

  instance.get("/all", (req: FastifyRequest, res: FastifyReply) => {
    res.status(httpStatus.OK).send(HerosConfig);
  });

  instance.get("/infos", async (req: FastifyRequest, res: FastifyReply) => {
    const infos = HerosConfig.map((hero) => {
      return { name: hero.name, image: hero.image };
    });

    res.status(httpStatus.OK).send(infos);
  });
  done();
};

export const autoPrefix = "/heros";
