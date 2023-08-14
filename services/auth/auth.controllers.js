import authService from "./auth.service.js";

const login = async (req, res) => {
  try {
    const loginBody = req.body;
    const loginRes = await authService.login(loginBody);
    return res
      .cookie("access_token", loginRes, { httpOnly: true })
      .status(201)
      .send("Logged in successfully");
  } catch (error) {
    res.status(404).send({ error });
  }
};

const refreshToken = async (req, res) => {
  console.log("refresh token");
};

const logout = async (req, res) => {
  console.log("logout");
};

export default { login, refreshToken, logout };
