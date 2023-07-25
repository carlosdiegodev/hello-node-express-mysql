const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql', //nome do nosso container
    user: 'admin',
    password: 'admin',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `insert into people(name) select concat('Carlosdev', convert(max(id)+1, char)) from people;`

connection.query(sql)
connection.end()

//Pegar o nome do mygow pela variavel de ambiente, se nao tiver definida, deixar em branco
const friendName = process.env.MYGOW || 'World';

app.get('/', (req,res) => {
    res.send('<h1>Hello '+friendName+'!</h1> \
    <p>Docker is life, NodeJS aswell!')    
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})