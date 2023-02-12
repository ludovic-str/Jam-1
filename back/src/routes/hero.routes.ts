import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { FastifyPluginOptions } from "fastify/types/plugin";
import httpStatus from "http-status";

import { FastifyPluginDoneFunction } from "../types/global.types";
import HerosConfig from "../../assets/heros.json";
import PedagoConfig from "../../assets/pedago.json";

export default (
  instance: FastifyInstance,
  _opts: FastifyPluginOptions,
  done: FastifyPluginDoneFunction
): void => {
  instance.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    const id = Math.floor(Math.random() * HerosConfig.length);

    res.status(httpStatus.OK).send(HerosConfig[id]);
  });

  instance.get("/dc", async (req: FastifyRequest, res: FastifyReply) => {
    const heros = HerosConfig.filter((hero) => hero.publisher === "DC Comics");

    const id = Math.floor(Math.random() * heros.length);

    res.status(httpStatus.OK).send(heros[id]);
  });

  instance.get("/marvel", async (req: FastifyRequest, res: FastifyReply) => {
    const heros = HerosConfig.filter(
      (hero) => hero.publisher === "Marvel Comics"
    );

    const id = Math.floor(Math.random() * heros.length);

    res.status(httpStatus.OK).send(heros[id]);
  });

  instance.get("/all", (req: FastifyRequest, res: FastifyReply) => {
    res.status(httpStatus.OK).send(HerosConfig);
  });

  instance.get("/infos", async (req: FastifyRequest, res: FastifyReply) => {
    const infos = HerosConfig.map((hero) => {
      return { name: hero.name, image: hero.image, publisher: hero.publisher };
    });

    res.status(httpStatus.OK).send(infos);
  });

  instance.get("/pedago", async (req: FastifyRequest, res: FastifyReply) => {
    const id = Math.floor(Math.random() * PedagoConfig.length);

    res.status(httpStatus.OK).send(PedagoConfig[id]);
  });

  instance.get(
    "/pedago/all",
    async (req: FastifyRequest, res: FastifyReply) => {
      res.status(httpStatus.OK).send(PedagoConfig);
    }
  );

  done();
};

export const autoPrefix = "/heros";
