// siapkan express

/*

kali ini kita siapkan dulu apa yang kita butuhkan diserver expressnya
mulai dari halaman sampai routenya

diharapkan kalian sudah belajar mengenai express ya, jika belum kalian lihat cari 
tutorial express, diyoutube ada WPU dan masih banyak sumber lain untuk belajar

langsung saja kita siapkan 

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