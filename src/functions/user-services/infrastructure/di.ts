import { Db } from "mongodb";
import { UserRepository } from "./adapters";
import {
  CreateUserUseCase,
  DeleteUserUseCase,
  GetAllUsersUseCase,
  GetUserUseCase,
  UpdateUserUseCase,
  UserServices,
} from "../core";
import { UsersController } from "./presentations/controllers";
import { DatabaseEnum, mongoClient } from "@libs/database";

// Db Instance
const dbClient = new Db(mongoClient, DatabaseEnum.NECTIA);

// Repositories
const userRepository = new UserRepository(dbClient);

// Use cases
const createUserUseCase = new CreateUserUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);
const getUserUseCase = new GetUserUseCase(userRepository);
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);

// Services
const userServices = new UserServices({
  createUserUseCase,
  updateUserUseCase,
  deleteUserUseCase,
  getUserUseCase,
  getAllUsersUseCase,
});

// Controllers
export const usersController = UsersController(userServices);
