import { Elysia, t } from "elysia";
import { createUserController } from "../server/dependencies";

export const userRouter = new Elysia({ prefix: "/users" })
  .get("/", () => "GET ALL USERS")
  .post("/", createUserController.run.bind(createUserController), {
    body: t.Object({
      email: t.String(),
      password: t.String(),
    }),
  });
