const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

mongoose.set('strictQuery', true);

mongoose.connect(
    process.env.DATABASE_URL.replace('password', process.env.DATABASE_PASSWORD),
);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
