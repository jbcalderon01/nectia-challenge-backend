import { Db, ObjectId } from "mongodb";
import {
  CreateUserDto,
  GetUserArgs,
  GetUsersDto,
  IUserRepository,
  UpdateUserDto,
} from "../../../core";
import { IUser, TPagination } from "@libs/entities";

export class UserRepository implements IUserRepository {
  private collection = "users";
  constructor(private readonly dbClient: Db) {}

  async createUser(dto: CreateUserDto): Promise<IUser> {
    const now = new Date();
    const userObj = {
      date_of_birth: dto.date_of_birth,
      email: dto.email,
      first_name: dto.first_name,
      last_name: dto.last_name,
      username: dto.username,
      updated_at: now,
      created_at: now,
    };

    const response = await this.dbClient
      .collection<Omit<IUser, "_id">>(this.collection)
      .insertOne(userObj);

    return {
      _id: String(response.insertedId),
      ...userObj,
    };
  }

  async deleteUser(id: string): Promise<boolean> {
    const response = await this.dbClient
      .collection<IUser>(this.collection)
      .deleteOne({ _id: new ObjectId(id) as any });

    return response.deletedCount === 1;
  }

  async getUser(dto: GetUserArgs): Promise<IUser | null> {
    const response = await this.dbClient
      .collection<IUser>(this.collection)
      .findOne({
        ...(dto.user_id && { _id: new ObjectId(dto.user_id) as any }),
        ...(dto.username && { username: dto.username }),
        ...(dto.email && { email: dto.email }),
      });

    return response;
  }

  async updateUser({ _id, ...rest }: UpdateUserDto): Promise<IUser | null> {
    const response = await this.dbClient
      .collection<IUser>(this.collection)
      .findOneAndUpdate(
        {
          _id: new ObjectId(_id) as any,
        },
        {
          $set: {
            ...rest,
          },
        },
        { returnDocument: "after" }
      );

    return response;
  }

  async getAllUsers(dto: GetUsersDto): Promise<TPagination<IUser>> {
    const { email, username, page, per_page, sortBy, sortDirection } = dto;

    const query = {
      ...(email && { email: username }),
      ...(username && { username: username }),
    };

    const response = await this.dbClient
      .collection<IUser>(this.collection)
      .find(query, {
        ...(per_page && { limit: per_page }),
        ...(page && { skip: page * per_page }),
        ...(sortBy && { sort: { [sortBy]: sortDirection === "asc" ? 1 : -1 } }),
      })
      .toArray();

    const totalCount = await this.dbClient
      .collection<IUser>(this.collection)
      .countDocuments(query);

    return {
      data: response,
      total_count: totalCount,
      per_page: per_page,
      page,
    };
  }
}
