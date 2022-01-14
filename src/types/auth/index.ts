import { User } from "../user";

export interface SignUpFormInput extends Omit<User, "id"> {}
