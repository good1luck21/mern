const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getOnePost,
  createPost,
} = require("../controllers/postscontroller");

router.get("/", getAllPosts);
router.get("/", getOnePost);
router.post("/", createPost);

module.exports = router;
