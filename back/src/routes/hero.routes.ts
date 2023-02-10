import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { FastifyPluginOptions } from "fastify/types/plugin";
import httpStatus from "http-status";

import { FastifyPluginDoneFunction } from "../types/global.types";
import HerosConfig from "../../assets/heros.json";
import ClientError from "../error";

type IdParams = FastifyRequest<{
  Params: {
    id: string;
  };
}>;

export default (
  instance: FastifyInstance,
  _opts: FastifyPluginOptions,
  done: FastifyPluginDoneFunction
): void => {
  instance.get("/:id", async (req: IdParams, res: FastifyReply) => {
    if (isNaN(parseInt(req.params.id))) {
      throw new ClientError({
        name: "Invalid Arguments",
        message: "id param is not an integer",
        level: "warm",
        status: httpStatus.BAD_REQUEST,
      });
    }

    const id = parseInt(req.params.id);

    if (HerosConfig[id] === undefined) {
      throw new ClientError({
        name: "Invalid Arguments",
        message: "hero index out of range",
        level: "warm",
        status: httpStatus.BAD_REQUEST,
      });
    }

    res.status(httpStatus.OK).send(HerosConfig[id]);
  });
  done();
};

export const autoPrefix = "/heros";
