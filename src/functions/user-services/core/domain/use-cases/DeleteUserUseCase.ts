import { IUser } from "@libs/entities";
import { IUseCase } from "./IUseCase";

export type TDeleteUserUseCaseInput = {
  user_id: string;
};

export type TDeleteUserUseCaseOutput = IUser;

export type IDeleteUserUseCase = IUseCase<
  TDeleteUserUseCaseInput,
  TDeleteUserUseCaseOutput
>;
