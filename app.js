const express = require("express");
const app = express();

const eventRoutes = require("./routes/eventRoutes");

app.use("/api/v1", eventRoutes);

module.exports = app;
