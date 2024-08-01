import { FastifyRequest } from "fastify";
import {
  CreateUserDto,
  GetUsersDto,
  IUserServices,
  UpdateUserDto,
} from "../../../core";

export function UsersController(userServices: IUserServices) {
  async function getUser(req: FastifyRequest<{ Params: { userId: string } }>) {
    const { userId } = req.params;

    const user = await userServices.getUser({
      user_id: userId,
    });
    return user;
  }

  async function deleteUser(
    req: FastifyRequest<{ Params: { userId: string } }>
  ) {
    const { userId } = req.params;

    const user = await userServices.deleteUser(userId);

    return user;
  }

  async function getAllUsers(
    req: FastifyRequest<{ Querystring: GetUsersDto & { tags: string } }>
  ) {
    const {
      page = 0,
      per_page = 10,
      email,
      username,
      sortBy = "createdAt",
      sortDirection = "desc",
    } = req.query;

    const users = await userServices.getAllUsers({
      page: page,
      per_page: per_page,
      sortBy: sortBy as string,
      sortDirection: sortDirection as "asc" | "desc",
      email,
      username,
    });

    return users;
  }

  async function updateUser(
    req: FastifyRequest<{
      Params: { userId: string };
      Body: UpdateUserDto;
    }>
  ) {
    const {
      date_of_birth,
      email,
      first_name,
      last_name,
      updated_at,
      username,
    } = req.body;
    const { userId } = req.params;

    const user = await userServices.updateUser({
      _id: userId,
      date_of_birth,
      email,
      first_name,
      last_name,
      updated_at,
      username,
    });

    return user;
  }

  async function createUser(
    req: FastifyRequest<{
      Body: CreateUserDto;
    }>
  ) {
    const { date_of_birth, email, first_name, last_name, username } = req.body;

    const user = await userServices.createUser({
      date_of_birth,
      email,
      first_name,
      last_name,
      username,
    });

    return user;
  }

  return {
    createUser,
    updateUser,
    getAllUsers,
    deleteUser,
    getUser,
  };
}
