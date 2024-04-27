import { PrismaClient } from "@prisma/client";
import { IUser } from "../domain/IUser";
import { User } from "../domain/User";

export class UserRepository implements IUser {
  private db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  async create(email: string, password: string): Promise<User> {
    const newUser = await this.db.user.create({
      data: {
        email,
        password,
      },
    });

    return new User(newUser.id, newUser.email, newUser.password);
  }
}
