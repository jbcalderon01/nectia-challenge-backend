import { ApiError, ErrorStatusCodes } from "@libs/utils";
import {
  IUserRepository,
  TUpdateUserUseCaseInput,
  TUpdateUserUseCaseOutput,
  IUpdateUserUseCase,
} from "../domain";
import { USER_ERROR } from "../domain/interfaces";

export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async validations(input: TUpdateUserUseCaseInput) {
    const user = await this.userRepository.getUser({
      user_id: input._id,
    });

    if (!user) {
      throw new ApiError(USER_ERROR.USER_NOT_FOUND, ErrorStatusCodes.NotFound);
    }
  }

  async execute(
    input: TUpdateUserUseCaseInput
  ): Promise<TUpdateUserUseCaseOutput> {
    await this.validations(input);

    const user = await this.userRepository.updateUser(input);

    return user!;
  }
}
