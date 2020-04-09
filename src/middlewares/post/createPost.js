import postService from '../../services/postService';

const createPost = async (req, res, next) => {
  try {
    const { title, body } = req.body;
    const user = await postService.create({
      title,
      author: req.user._id,
      body,
    });
    return res.status(200).send(user);
  } catch (err) {
    return next(err);
  }
};

export default createPost;
