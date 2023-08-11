import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../users/users.model.js";
import { notExistUser, wrongPassword } from "./auth.errors.js";

const login = async (loginBody) => {
  const { password: loginPassword, email } = loginBody;
  const user = await Users.findByEmail(email);
  if (!user) {
    throw notExistUser;
  }
  const { password } = user;
  const comparePasswords = bcrypt.compareSync(loginPassword, password);
  if (!comparePasswords) {
    throw wrongPassword;
  }
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_TOKEN, {
    expiresIn: "1h",
  });

  return token;
};

export default { login };
