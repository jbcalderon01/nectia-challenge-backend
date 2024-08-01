import { ApiError, ErrorStatusCodes } from "@libs/utils";
import {
  IUserRepository,
  TDeleteUserUseCaseInput,
  TDeleteUserUseCaseOutput,
  IDeleteUserUseCase,
} from "../domain";
import { USER_ERROR } from "../domain/interfaces";

export class DeleteUserUseCase implements IDeleteUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(
    input: TDeleteUserUseCaseInput
  ): Promise<TDeleteUserUseCaseOutput> {
    const user = await this.userRepository.getUser({
      user_id: input.user_id,
    });

    if (!user) {
      throw new ApiError(USER_ERROR.USER_NOT_FOUND, ErrorStatusCodes.NotFound);
    }

    await this.userRepository.deleteUser(input.user_id);

    return user;
  }
}
