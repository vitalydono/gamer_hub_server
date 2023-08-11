import authService from "./auth.service.js";

const login = async (req, res) => {
  try {
    const loginBody = req.body;
    return res.status(201).send(await authService.login(loginBody));
  } catch (error) {
    res.status(404).send({ error });
  }
};

export default { login };
