import { ApiError, ErrorStatusCodes } from "@libs/utils";
import {
  IUserRepository,
  TCreateUserUseCaseInput,
  TCreateUserUseCaseOutput,
  ICreateUserUseCase,
} from "../domain";
import { USER_ERROR } from "../domain/interfaces";

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(
    input: TCreateUserUseCaseInput
  ): Promise<TCreateUserUseCaseOutput> {
    const isExistUser = await this.userRepository.getUser({
      email: input.email,
      username: input.username,
    });

    if (isExistUser) {
      throw new ApiError(
        USER_ERROR.USER_ALREADY_EXIST,
        ErrorStatusCodes.BadRequest
      );
    }

    const user = await this.userRepository.createUser(input);

    return user;
  }
}
