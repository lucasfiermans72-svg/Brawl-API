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
          Authorization: `Bearer ${eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM3YmYwMDEyLWVkYjktNDgyNS1iN2VkLTc3MzMxNDY4YmNiNiIsImlhdCI6MTc3NDQ2MDQ3Nywic3ViIjoiZGV2ZWxvcGVyL2MyOGU4MWU3LTc1ODktZTExYy0wYTQwLTkyNjVjNWMxY2EyMCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiOTQuMjI3LjEwNy4xMzAiXSwidHlwZSI6ImNsaWVudCJ9XX0.jfkJPiCiErwkyfyZMVviv3Ko0MHeV9Byo_p3I5nir8-RT9pNwVG0tSUAACPSYRVE81AgaLp3E5tq_sGkjwAmAQ}`,
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
