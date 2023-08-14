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
  const { password, _id } = user;
  const comparePasswords = bcrypt.compareSync(loginPassword, password);
  if (!comparePasswords) {
    throw wrongPassword;
  }
  const token = jwt.sign({ userId: _id }, process.env.SECRET_TOKEN, {
    expiresIn: "1h",
  });

  return token;
};

const refreshToken = async (req, res) => {
  console.log("refresh token service");
};

const logout = async (req, res) => {
  console.log("logout service");
};

export default { login, refreshToken, logout };
