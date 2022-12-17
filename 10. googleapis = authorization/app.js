// authorization

/*

nah sekarang kita akan membatasi akses kehalaman yang mewajibkan kita harus
login

dalam kasus ini adalah halaman dashboard

nah yang akan kita lakukan adalah

ketika user belum login dan user itu mengakses halaman dashboard
maka kira redirect kehalaman login

dan ketika user sudah login dan user ingin mengakses halaman login
dan home

maka kita redirect kehalaman dashboard

mungkin kali ini kadaluarsa dari tokennya kalian tambah biar agak
lama dikit

dan jangan lupa max age sama expiresInnya disamakan 

oke kita langsung coba
kita pergi helaman dashboard


*/

import express from 'express'
import router from './route/routes.js'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import mysql from './model/mysql.js'

const app = express()



// middleware
app.set('view engine','ejs')
app.use('/auth',router)

// kita tambahkan cookie parsernya kemiddleware
app.use(cookieParser())
// pergi kefile routes


// page route

app.get('/',(req,res) => {

    /*
    
    disini kita check apakah tokennya itu ada 
    kalo iya maka kita redirect kehalaman dashboard

    kita ga perlu check tokennya itu benar atau salah
    karena ketika kira redirect kehalaman dashboard
    maka dihalaman dashboard itu sudah melakukan pengecheck
    token

    jadi kita tidak pelu mengecheck token lagi diroute /
    cukup kita redirect saja kehalaman dashboard 
    
    kita coba
    
    */

    if(req.cookies.token){
        return res.redirect('/dashboard')
    }

    /*
    
    nah begitu juga dengan route /login
    
    */

    res.render('index')
})

app.get('/login',(req,res) => {

    if(req.cookies.token){
        return res.redirect('/dashboard')
    }

    res.render('login')
})

app.get('/dashboard',async (req,res) => {

    /*
    
    yang pertama kita lakukan adalah mengecheck apakah tokennya itu ada 
    atau tidak
    
    */


    const token = req.cookies.token

    // kalo ga ada kita redirect kehalaman login
    if(!token){
        return res.redirect('/login')
    }

    // verify token

    /*
    
    jika token yang diambil dari browser cookie itu benar
    maka kita bisa verify

    dan jika salah maka akan terjadi error

    kita membuat pengecheckan tersebut karena kita bisa
    menambahkan cookie dibrowser dengan perintah

    document.cookie = "token=" + Math.random().toString(36).substring(2);
    
    */
    try{
        const {id} = jwt.verify(token,'login woy')


        /*
        
        nah ketika tokennya benar kita cari kedalam database idnya
        apakah ada atau tidak

        jika tidak ada kita hapus tokenya dan 
        kita redirect kehalaman login
        
        */

        // ambil user
        const user = await mysql('pengguna').where('id',id)

        // check user
        if(!user.length){
            res.clearCookie('token')
            return res.redirect('/login')
        }
        
        // kirimkan user
        res.render('dashboard',{user: user[0]})
    }catch(err){
        res.clearCookie('token')
        res.redirect('/login')
    }


    /*
    
    nah sekarang kita pergi ke route /
    
    */
})


app.listen(3000,function(){
    console.log('server is listening on http://127.0.0.1:3000')
})


/*

oke jadi kita sudah berhasil melakukan authorization 
pada halaman dashboard


oke jadi cukup sekian untuk tutorial kali ini
mudah mudahan kalian paham



*/