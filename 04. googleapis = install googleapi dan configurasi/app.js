// googleapis config

/*

nah sekarang kita install dulu googleapis dengan menggunakan perintah
npm i googleapis

dan kita buat file baru yang namanya googleapis-config



*/

import express from 'express'

const app = express()



// middleware
app.set('view engine','ejs')



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

oke kita sudah menyaapkan aplikasi kita tinggal disesi berikutnya
kita akan coba package dari npm yaitu

googleapis untuk melakukan Oauth2 disisi server

*/