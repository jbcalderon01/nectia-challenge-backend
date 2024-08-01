import { FastifyInstance } from "fastify";
import { usersController } from "../../di";
import {
  createUserSchemaInput,
  getAllUsersSchemaInput,
  getUserSchemaInput,
  updateUserSchemaInput,
} from "../schema";
import { IncomingMessage, Server, ServerResponse } from "http";

export function usersRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  _opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.get("/", getAllUsersSchemaInput, usersController.getAllUsers);

  fastify.get("/:userId", getUserSchemaInput, usersController.getUser);

  fastify.post("/", createUserSchemaInput, usersController.createUser);

  fastify.put("/:userId", updateUserSchemaInput, usersController.updateUser);

  fastify.delete("/:userId", usersController.deleteUser);
  next();
}
