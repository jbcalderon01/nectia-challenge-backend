import { IUser, TPagination } from "@libs/entities";
import { CreateUserDto, GetUserDto, GetUsersDto, UpdateUserDto } from "../dto";

export interface IUserServices {
  getUser(dto: GetUserDto): Promise<IUser | null>;
  getAllUsers(dto: GetUsersDto): Promise<TPagination<IUser>>;
  createUser(dto: CreateUserDto): Promise<IUser>;
  updateUser(dto: UpdateUserDto): Promise<IUser | null>;
  deleteUser(user_id: string): Promise<IUser>;
}
