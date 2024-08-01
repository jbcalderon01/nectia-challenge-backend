import { usersRoutes } from "./infrastructure";
import fastify from "fastify";
import { errorFormatter } from "@libs/utils";
import cors from "@fastify/cors";
import { connectToDatabase } from "@libs/database";

const app = fastify();
connectToDatabase();

app.setErrorHandler(errorFormatter);
app.register(cors);
app.register(usersRoutes, { prefix: "/users" });

export default app;
