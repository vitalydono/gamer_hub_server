import jwt from "jsonwebtoken";

const isAuthorizedUser = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    res
      .status(403)
      .send({ message: "You are not authorized to create profile" });
  }
  try {
    const data = jwt.verify(token, process.env.SECRET_TOKEN);
    req.userId = data.userId;

    return next();
  } catch (error) {
    res.status(403).send({ message: error });
  }
};

export default { isAuthorizedUser };
