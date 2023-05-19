const express = require("express");
let axios = require("axios");
var app = express();

app.use(express.json());

app.post("/", async function (req, res, next) {
  try {
    let results = req.body.developers.map(async (d) => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });

    const resolvedResults = await Promise.all(results);
    let out = resolvedResults.map((r) => ({
      bio: r.data.bio,
      name: r.data.name,
    }));

    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

app.listen(3000, function () {
  console.log("Server starting on port 3000");
});
