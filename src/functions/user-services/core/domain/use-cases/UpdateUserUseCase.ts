import { IUser } from "@libs/entities";
import { UpdateUserDto } from "../dto";
import { IUseCase } from "./IUseCase";

export type TUpdateUserUseCaseInput = UpdateUserDto;
export type TUpdateUserUseCaseOutput = IUser;

export type IUpdateUserUseCase = IUseCase<
  TUpdateUserUseCaseInput,
  TUpdateUserUseCaseOutput
>;
