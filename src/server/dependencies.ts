import { Hash } from "../services/hash";
import { CreateUser } from "../user/application/create";
import { UserRepository } from "../user/infraestructure/UserRepository";
import { CreateUserController } from "../user/infraestructure/controllers/createControllers";

const userRepository = new UserRepository();
const hashService = new Hash();
const createUser = new CreateUser(userRepository, hashService);
export const createUserController = new CreateUserController(createUser);
