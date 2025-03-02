import express from "express";
import dotenv from "dotenv";


// Load environment variables from .env file
dotenv

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Use environment variables
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});