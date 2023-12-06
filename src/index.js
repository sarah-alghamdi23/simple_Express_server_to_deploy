import express from "express";
const PORT = 3005;

const app = express();

//Data
const thingsILike = [
  {
    plants: "botes",
    markers: "limon green",
    movies: "mulan",
    music: "jazz",
    sports: "robe skipping",
  },
];

//Routes
app.get("/", (req, res) => {
  res.send("<h1>your server is working, congrats.</h1>");
});

app.get("/thingsILike", (req, res) => {
  res.json(thingsILike);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
