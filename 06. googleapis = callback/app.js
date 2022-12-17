// callback

/*

nah sekarang kita akan menambahkan route baru yaitu
/auth/google/callback



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

oke kita sudah berhasil mendapatkan userinfo
selanjutnya kita akan simpan user info tersebut kedalamn database


kita akan menggunakan database mysql dan knex sebagai ORMnya
kita akan lanjutkan disesi berikutnya

*/