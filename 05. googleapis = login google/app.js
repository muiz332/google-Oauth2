// login google

/*

nah sekarang kita akan melaukan login dengan google
dihalaman login ketika diklik login dengan google
maka akan diredirect hahalamn login google

kita akan coba
kita buat folder route untuk memisahkan 
route auth kita 



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

oke kita sudah berhasil melakukan redirect ke halaman login google
tetapi ketika kita klik salah satu akun google kita untuk melakukan
login 

maka akan ada error yang ditampilkan yaitu 
Cannot GET /auth/google/callback

katanya tidak ada route /auth/google/callback
makanya dia error


kita akan lanjutkan disesi berikutnya mengenai route callback

*/