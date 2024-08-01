import { SchemaCompiler } from "./schema";

export const createUserSchemaInput: SchemaCompiler = {
  schema: {
    body: {
      type: "object",
      properties: {
        first_name: { type: "string" },
        last_name: { type: "string" },
        email: { type: "email" },
        username: { type: "string" },
        date_of_birth: { type: "string" },
      },
      required: [
        "first_name",
        "last_name",
        "email",
        "date_of_birth",
        "username",
      ],
    },
  },
};

export const updateUserSchemaInput: SchemaCompiler = {
  schema: {
    params: {
      type: "object",
      properties: {
        userId: { type: "string" },
      },
      required: ["userId"],
    },
    body: {
      type: "object",
      properties: {
        first_name: { type: "string" },
        last_name: { type: "string" },
        email: { type: "email" },
        username: { type: "string" },
        date_of_birth: { type: "string" },
      },
    },
  },
};

export const getAllUsersSchemaInput: SchemaCompiler = {
  schema: {
    querystring: {
      type: "object",
      properties: {
        per_page: { type: "number", default: 10 },
        page: { type: "number", default: 0 },
        sortBy: { type: "string", default: "created_at" },
        sortDirection: { type: "string", default: "desc" },
        username: { type: "string" },
        email: { type: "string" },
      },
    },
  },
};

export const getUserSchemaInput: SchemaCompiler = {
  schema: {
    params: {
      type: "object",
      properties: {
        userId: { type: "string" },
      },
      required: ["userId"],
    },
  },
};
