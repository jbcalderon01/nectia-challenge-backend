import { IUser, TPagination } from "@libs/entities";
import {
  CreateUserDto,
  GetUserDto,
  GetUsersDto,
  ICreateUserUseCase,
  IDeleteUserUseCase,
  IGetAllUsersUseCase,
  IGetUserUseCase,
  IUpdateUserUseCase,
  UpdateUserDto,
} from "../domain";
import { IUserServices } from "../domain/services";

export class UserServices implements IUserServices {
  constructor(
    private deps: {
      createUserUseCase: ICreateUserUseCase;
      deleteUserUseCase: IDeleteUserUseCase;
      updateUserUseCase: IUpdateUserUseCase;
      getAllUsersUseCase: IGetAllUsersUseCase;
      getUserUseCase: IGetUserUseCase;
    }
  ) {}

  createUser(dto: CreateUserDto): Promise<IUser> {
    return this.deps.createUserUseCase.execute(dto);
  }

  deleteUser(user_id: string): Promise<IUser> {
    return this.deps.deleteUserUseCase.execute({
      user_id,
    });
  }

  updateUser(dto: UpdateUserDto): Promise<IUser | null> {
    return this.deps.updateUserUseCase.execute(dto);
  }

  getAllUsers(dto: GetUsersDto): Promise<TPagination<IUser>> {
    return this.deps.getAllUsersUseCase.execute(dto);
  }

  getUser(dto: GetUserDto): Promise<IUser | null> {
    return this.deps.getUserUseCase.execute(dto);
  }
}
