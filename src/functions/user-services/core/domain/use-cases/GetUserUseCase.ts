import { IUser } from "@libs/entities";
import { IUseCase } from "./IUseCase";

export type TGetUserUseCaseInput = {
  user_id: string;
};

export type TGetUserUseCaseOutput = IUser;

export type IGetUserUseCase = IUseCase<
  TGetUserUseCaseInput,
  TGetUserUseCaseOutput
>;
