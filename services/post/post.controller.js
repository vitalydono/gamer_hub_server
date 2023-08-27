import usersServices from "./post.service.js";

const createPost = async (req, res) => {
  try {
    const postBody = req.body;
    return res.status(201).send(await usersServices.createPost(postBody));
  } catch (error) {
    res.status(404).send({ error });
  }
};

export default {
  createPost,
};
