const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");

app.get("/comments", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      res.json(response.data);
    });
});

app.get("/comment/:id", (req, res, error) => {
  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      const comment = response.data.find((comment) => {
        return comment.id === Number(req.params.id);
      });
      res.json(comment);
    });
  console.log(error);
  res.status(500).send("Comment Does not exist");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
