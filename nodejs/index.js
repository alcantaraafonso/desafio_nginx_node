const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

inserir = () => {
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    const sql = `INSERT INTO people(name) values ('Afonso')`

    connection.query(sql)
    connection.end()
}


app.get('/', (req, res) => {
    text = '<h1>Full Cycle Rocks!</h1>';

    inserir();

    res.send(text)
})

app.listen(port, () => {
    console.log('Rodadndo na porta ' + port)
})