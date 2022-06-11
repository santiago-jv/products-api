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
    host:DATABASE_HOST
})
client.connect()

module.exports = client
