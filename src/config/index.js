const { Sequelize } = require('sequelize')
require('dotenv').config()

const db = new Sequelize({
    dialect:"mysql",
    dialectModule: require('mysql2'),
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER || "freedb_dapaa",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME,
    timezone: '+07:00'
})

const port = parseInt(process.env.PORT_APP) || 8000;
const api = process.env.API_PATH || 'api/v1';
const secretKey = process.env.SECRET_KEY;
const users_url = String(process.env.PHOTO_USER_URL);
const books_url = String(process.env.PHOTO_BOOK_URL);

module.exports = {
    db,
    port,
    api,
    secretKey,
    users_url,
    books_url
}