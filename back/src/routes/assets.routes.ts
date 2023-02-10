import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import fs from "fs";
import httpStatus from "http-status";

import { FastifyPluginDoneFunction } from "../types/global.types";

type GetImageRequest = FastifyRequest<{
  Params: {
    image: string;
  };
}>;

export default (
  instance: FastifyInstance,
  _opts: FastifyPluginOptions,
  done: FastifyPluginDoneFunction
): void => {
  instance.get("/:image", async (req: GetImageRequest, res: FastifyReply) => {
    try {
      const buffer = fs.readFileSync("./assets/images/tom.jpg");

      res.type("image/png");
      return res.send(buffer);
    } catch (e) {
      res.status(httpStatus.BAD_REQUEST).send(e);
    }
  });
  done();
};

export const autoPrefix = "/assets";
