import express from 'express'
import { loginUrl,oauth2Client } from '../googleapis-config.js'
import mysql from '../model/mysql.js'
import jwt from 'jsonwebtoken'
import getUserInfo from '../util/getUserInfo.js'

const router = express.Router()



router.get('/google',(req,res) => {
    res.redirect(loginUrl)
})


// membuat route baru

router.get('/google/callback', async (req,res) => {

    const code = req.query.code 
    const {tokens} = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens)

    /*
    
    nah kita perbaiki codingan disesi sebelumnya pada bagian 
    mengambil userinfo

    kita ubah yang tadinya memiliki callback sekarang kita hilangkan 
    callbacknya dengan menggunakan Promise
    
    */

    try{
        const {id,name,email,img} = await getUserInfo(oauth2Client)


        // check user

        const user = await mysql('pengguna').where('id',id)

        // jika usernya tidak ada kita buat
        if(!user.length){
            await mysql('pengguna').insert({id,name,email,img})
        }

        // tambah data

        // buat token
        const token = jwt.sign({id},'login woy',{
            expiresIn : '3m',
        })

        // set cookie
        res.cookie('token',token,{
            maxAge : 3 * 60 * 1000,
            httpOnly: true,
            secure : true
        })

    }catch(err){
        console.log(err)
    }finally{
        res.redirect('/dashboard')
    }

})


export default router