import Elysia from "elysia";
import { userRouter } from "../user/userRouter";

export class Server {
  private app: Elysia;

  constructor() {
    this.app = new Elysia();
    this.app.get("/", (app) => {
      return "OK";
    });
    this.app.group("/api/v1", (app) => {
      app.use(userRouter);
      return app;
    });
  }

  public start(port = 3000) {
    this.app.listen(Bun.env.PORT || port, () => {
      console.log(
        `🦊 Elysia is running at ${this.app.server?.hostname}:${this.app.server?.port}`
      );
    });
  }
}
