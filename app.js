const express = require('express');
const app = express();

const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json({ limit: '10kb' }));
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;
