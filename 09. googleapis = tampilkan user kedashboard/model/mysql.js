import knex from "knex";


const mysql = knex({
    client : "mysql",
    connection : {
        host : 'localhost',
        port : 3306,
        user : 'root',
        password :  '',
        database : 'login_google'
    }
})

export default mysql


/*

nah setelah kalian membuat koneksinya kalian harus membuat tablenya
dimana tablenya seperti ini


id varchar(255) not null primar key,
name varchar(100) not null,
email varchar(100) not null,
img varchar(255)

nah kalian bisa membuat tablenya dimysql langsung atau kita bisa menggunakan
knex untuk membuat tablenya

kita bisa gunakan fitur knex yang namanya migration
kalian baca didocumentasinya

https://knexjs.org/guide/migrations.html#migration-cli

kalian install dulu knexnya secara global 
npm install knex -g

lalu
knex init

knex migrate:make table_pengguna

jika sudah mengatur tablenya 
knex migrate:latest


ubah extention file yang ada didalam folder migrations menjadi
cjs jika kalian menggunakan es6 atau import dan export


*/