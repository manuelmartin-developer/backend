const { Client } = require('pg');

const client = new Client({
    user: 'admin',
    host: 'localhost',
    database: 'users',
    password: 'admin'
});
(async function prueba(){
await client.connect()
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message)
// SELECT
const res2 = await client.query("SELECT * FROM personas");
console.log(res2.rows);
//INSERT
const res3 = await client.query('INSERT INTO personas(nombre,apellido1,apellido2) VALUES($1,$2,$3)', ['Manu' ,'con chupete', 'canario' ]);
console.log(res3.rows);


await client.end()
})()