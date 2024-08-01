import { IUser } from "@libs/entities";

export type CreateUserDto = Omit<IUser, "_id" | "created_at" | "updated_at">;

export type UpdateUserDto = Partial<Omit<IUser, "_id">> & {
  _id: string;
};

export type GetUserDto = {
  user_id: string;
};

export type GetUsersDto = {
  username?: string;
  email?: string;
  per_page: number;
  page: number;
  sortBy?: string;
  sortDirection?: "asc" | "desc";
};
