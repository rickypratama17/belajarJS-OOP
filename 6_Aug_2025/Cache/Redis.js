const express = require("express");
const redis = require("redis");
const axios = require("axios");

const app = express();
const client = redis.createClient();

// Middleware to check cache
async function checkCache(req, res, next) {
  const { username } = req.params;
  client.get(username, (err, data) => {
    if (data) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
}

// Route to fetch GitHub user data
app.get("/user/:username", checkCache, async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const userData = response.data;
    // Store data in Redis for 60 seconds
    client.setex(username, 60, JSON.stringify(userData));
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));