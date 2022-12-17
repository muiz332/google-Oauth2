import express from 'express'
import { loginUrl,oauth2Client } from '../googleapis-config.js'
import { google } from 'googleapis'

const router = express.Router()


router.get('/google',(req,res) => {
    res.redirect(loginUrl)
})


// membuat route baru

router.get('/google/callback', async (req,res) => {
    // ambil code untuk mengembil token

    const code = req.query.code 
    const {tokens} = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens)
    /*
    
    Method setCredentials digunakan untuk mengatur token OAuth2 akses dan 
    refresh untuk objek oauth2Client. Token-token ini digunakan untuk 
    mengotentikasi client dan memberikan hak akses kepada client untuk 
    membuat permintaan API atas nama pengguna.

    Objek tokens biasanya berisi properti-properti berikut:

    access_token: token akses OAuth2, yang merupakan string yang mewakili hak 
    akses yang diberikan kepada client

    refresh_token: token refresh OAuth2, yang merupakan string yang dapat 
    digunakan untuk mendapatkan token akses baru saat token asli kedaluwarsa

    token_type: tipe token yang digunakan (misalnya, "Bearer")
    expires_in: jumlah detik sampai token akses kedaluwarsa

    Dengan memanggil setCredentials dan menyertakan objek tokens, client 
    dapat menggunakan token akses dan refresh untuk mengotentikasi dirinya 
    sendiri dan membuat permintaan API yang diotorisasi atas nama pengguna.
    
    */

    // token dikrimkan ke google oauth2
    // untuk mengambil userinfonya

    const oauth2 = google.oauth2({
        auth : oauth2Client,
        version : 'v2'
    })

    oauth2.userinfo.get(function(err,res){
        if(err){
            console.log(err)
        }else{
            console.log(res.data)
        }
    })

    /*
    
    hasil dari res.data

    {
        id: '117437935164945199757',
        name: 'Mz oioi',
        given_name: 'Mz',
        family_name: 'oioi',
        picture: 'https://lh3.googleusercontent.com/a/AEdFTp7O7Z8M-Tg3o83qM9aK_cQ3rmyLTozlcGGplmCq=s96-c',
        locale: 'id'
    }
    
    */


    res.redirect('/dashboard')
})


export default router