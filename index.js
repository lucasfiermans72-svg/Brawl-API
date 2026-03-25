import express from "express";
import fetch from "node-fetch";

const app = express();

const API_KEY = process.env.API_KEY;

app.get("/api/player", async (req, res) => {
  const tag = req.query.tag;

  try {
    const response = await fetch(
      `https://api.brawlstars.com/v1/players/%23${tag}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(3000, () => console.log("Running"));
