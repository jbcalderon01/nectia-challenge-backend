import { IUser, TPagination } from "@libs/entities";
import { CreateUserDto, GetUsersDto, UpdateUserDto } from "../../dto";

export type GetUserArgs = {
  email?: string;
  username?: string;
  user_id?: string;
};
export interface IUserRepository {
  getUser(dto: GetUserArgs): Promise<IUser | null>;
  getAllUsers(dto: GetUsersDto): Promise<TPagination<IUser>>;
  createUser(dto: CreateUserDto): Promise<IUser>;
  updateUser(dto: UpdateUserDto): Promise<IUser | null>;
  deleteUser(product_id: string): Promise<boolean>;
}
