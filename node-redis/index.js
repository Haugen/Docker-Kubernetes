const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "redis-server"
});
client.set("visits", 0);

const port = 3000;

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visists: " + visits);
    client.set("visits", Number(visits) + 1);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
