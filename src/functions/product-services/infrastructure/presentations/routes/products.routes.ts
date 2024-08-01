import { FastifyInstance } from "fastify";
import { productsController } from "../../di";
import {
  createProductSchemaInput,
  getAllProductsSchemaInput,
  getProductSchemaInput,
  updateProductSchemaInput,
} from "../schema";
import { IncomingMessage, Server, ServerResponse } from "http";

export function productsRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  _opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.get(
    "/",
    getAllProductsSchemaInput,
    productsController.getAllProducts
  );

  fastify.get(
    "/:productId",
    getProductSchemaInput,
    productsController.getProduct
  );

  fastify.post("/", createProductSchemaInput, productsController.createProduct);

  fastify.put(
    "/:productId",
    updateProductSchemaInput,
    productsController.updateProduct
  );

  fastify.delete("/:productId", productsController.deleteProduct);
  next();
}
