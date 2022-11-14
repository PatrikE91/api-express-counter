const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan());

let counter = 42;
const counters = [
  { name: "book", counter: 2 },
  { name: "games", counter: 2 },
];

app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

app.delete("/counter", (req, res) => {
  res.json({ counter: 0 });
});

app.post("/counter/increment", (req, res) => {
  res.json({ counter: counter + 1 });
});

app.post("/counter/decrement", (req, res) => {
  res.json({ counter: counter - 1 });
});

app.post("/counter/double", (req, res) => {
  res.json({ counter: counter * 2 });
});

app.put("/counter", (req, res) => {
  console.log("HERE", req.query.value);
  const updatedCounter = req.query.value;
  res.json({ counter: updatedCounter });
});

app.get("/counter/:name", (req, res) => {
  const { name } = req.params;
  const counter = counters.find((c) => c.name === name);
  res.json({ counter: counter });
});
app.delete("/counter/:name", (req, res) => {
  const { name } = req.params;
  counters.forEach((item, index) => {
    if (item.name === name) {
      return counters.splice(index, 1);
    }
  });
  res.json({ counter: counters });
});

app.post("/counter/:name/increment", (req, res) => {
  const { name } = req.params;
  counters.forEach((item) => {
    if (item.name === name) {
      return (item.counter += 1);
    }
  });
  res.json({ counter: counters });
});

app.post("/counter/:name/decrement", (req, res) => {
  const { name } = req.params;
  counters.forEach((item) => {
    if (item.name === name) {
      return (item.counter -= 1);
    }
  });
  res.json({ counter: counters });
});
app.post("/counter/:name/double", (req, res) => {
  const { name } = req.params;
  counters.forEach((item) => {
    if (item.name === name) {
      return (item.counter *= 2);
    }
  });
  res.json({ counter: counters });
});

app.listen(3030, () => {
  console.log("my app satrted");
});
