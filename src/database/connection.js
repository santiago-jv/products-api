require('dotenv').config()
const { Client } = require('pg')

const {
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME,
    DATABASE_HOST
} = process.env

const client = new Client({
    database:DATABASE_NAME,
    user:DATABASE_USER,
    port:DATABASE_PORT,
    password:DATABASE_PASSWORD,
    host:DATABASE_HOST,
    ssl:true
})
client.connect()
client.query(`CREATE TABLE IF NOT EXISTS products (
    id SERIAL,
    name varchar(255),
    price varchar(255),
    PRIMARY KEY (id)
);`)

module.exports = client
