import {
  IUserRepository,
  TGetAllUsersUseCaseInput,
  TGetAllUsersUseCaseOutput,
  IGetAllUsersUseCase,
} from "../domain";

export class GetAllUsersUseCase implements IGetAllUsersUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(
    input: TGetAllUsersUseCaseInput
  ): Promise<TGetAllUsersUseCaseOutput> {
    const users = await this.userRepository.getAllUsers(input);

    return users;
  }
}
