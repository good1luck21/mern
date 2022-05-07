const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");
const app = express();

app.use(cors());
app.use("/api/posts", postRoutes);

app.listen(5050, () => {
  console.log("hello");
  console.log("hello");
  console.log("hello");
});
