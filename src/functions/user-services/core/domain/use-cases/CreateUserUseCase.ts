import { IUser } from "@libs/entities";
import { CreateUserDto } from "../dto";
import { IUseCase } from "./IUseCase";

export type TCreateUserUseCaseInput = CreateUserDto;
export type TCreateUserUseCaseOutput = IUser;

export type ICreateUserUseCase = IUseCase<
  TCreateUserUseCaseInput,
  TCreateUserUseCaseOutput
>;
