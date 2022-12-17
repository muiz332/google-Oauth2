// knex

/*

kita install dulu 

npm i mysql knex

jadi knex ini sebenarnya menggunakan driver mysql untuk koneksi kedalam
database

tapi dengan knex kita bisa melakukan manipulasi data dengan mudah

nah sekarang kita buat folder dengan nama model 
yang isinya file mysql.js untuk koneksi ke mysqlnya


*/

import express from 'express'
import router from './route/routes.js'

const app = express()



// middleware
app.set('view engine','ejs')
app.use('/auth',router)


// page route

app.get('/',(req,res) => {
    res.render('index')
})

app.get('/login',(req,res) => {
    res.render('login')
})

app.get('/dashboard',(req,res) => {
    res.render('dashboard')
})


app.listen(3000,function(){
    console.log('server is listening on http://127.0.0.1:3000')
})


/*

oke kita sudah berhasil membuat tablenya kalian bisa check tablenya 
dimysqlnya 

disesi berikutnya kita akan coba insert datanya kedalam mysql

*/