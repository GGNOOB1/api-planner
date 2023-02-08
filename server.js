const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

mongoose.set('strictQuery', true);

mongoose.connect(
    process.env.DATABASE_URL.replace('password', process.env.DATABASE_PASSWORD),
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
