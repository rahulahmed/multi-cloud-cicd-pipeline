// app/server.js 
//
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || process.env.GITHUB_SHA || "v1";

app.get("/", (req, res) => res.json({ message: "App is running", version: VERSION }));
app.get("/health", (req, res) => res.json({ status: "healthy" }));
app.get("/version", (req, res) => res.json({ version: VERSION }));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
