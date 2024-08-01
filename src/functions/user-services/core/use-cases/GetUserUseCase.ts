import { ApiError, ErrorStatusCodes } from "@libs/utils";
import {
  IUserRepository,
  TGetUserUseCaseInput,
  TGetUserUseCaseOutput,
  USER_ERROR,
  IGetUserUseCase,
} from "../domain";

export class GetUserUseCase implements IGetUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: TGetUserUseCaseInput): Promise<TGetUserUseCaseOutput> {
    const user = await this.userRepository.getUser({
      user_id: input.user_id,
    });

    if (!user) {
      throw new ApiError(USER_ERROR.USER_NOT_FOUND, ErrorStatusCodes.NotFound);
    }
    return user;
  }
}
