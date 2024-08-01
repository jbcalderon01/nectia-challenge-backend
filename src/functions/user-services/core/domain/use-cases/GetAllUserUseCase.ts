import { IUser, TPagination } from "@libs/entities";
import { GetUsersDto } from "../dto";
import { IUseCase } from "./IUseCase";

export type TGetAllUsersUseCaseInput = GetUsersDto;
export type TGetAllUsersUseCaseOutput = TPagination<IUser>;

export type IGetAllUsersUseCase = IUseCase<
  TGetAllUsersUseCaseInput,
  TGetAllUsersUseCaseOutput
>;
