const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')


const names = [
    { name: 'John' },
    { name: 'Peter' },
    { name: 'Amy' },
    { name: 'Hannah' },
    { name: 'Michael' },
    { name: 'Sandy' },
    { name: 'Betty' },
    { name: 'Richard' },
    { name: 'Susan' },
    { name: 'Vicky' },
    { name: 'Ben' },
    { name: 'William' },
    { name: 'Chuck' },
    { name: 'Viola' }
]

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

inserir = () => {
    ramdomName = Math.floor(Math.random() * names.length);
    connection = mysql.createConnection(config);
    sqlInsert = `INSERT INTO people(name) values ('${names[ramdomName].name}')`;

    connection.query(sqlInsert);

    connection.end();
}

function getNames() {
    connection = mysql.createConnection(config);

    promise = new Promise((resolve, reject) => {
        connection.query(
            "select * from people",
            (err, result) => {
                return err ? reject(err) : resolve(result);
            }
        );
    });

    connection.end();

    return promise;

}


app.get('/', async (req, res) => {

    inserir();

    text = '<h1>Full Cycle Rocks!</h1>';
    text += '<br><br>';
    text += '<b>Lista de nomes cadastrados</b>';
    text += '<ul>';

    const result = await getNames();
    console.log(result);
    result.forEach(function (row) {
        console.log(row.name);
        text += `<li>${row.name}</li>`;
    });


    text += '</ul>';
    res.send(text);


})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})