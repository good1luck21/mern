const getAllPosts = (req, res) => {
  res.json({ message: "Controller経由でGetにアクセスできたよ！" });
};

const getOnePost = (req, res) => {
  res.json({ message: "Controller経由でGetにアクセスできたよ！" });
};

const createPost = (req, res) => {
  res.json({ message: "Controller経由でGetにアクセスできたよ！" });
};

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
};
