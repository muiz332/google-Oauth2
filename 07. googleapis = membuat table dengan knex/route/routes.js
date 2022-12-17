import express from 'express'
import { loginUrl,oauth2Client } from '../googleapis-config.js'
import { google } from 'googleapis'

const router = express.Router()


router.get('/google',(req,res) => {
    res.redirect(loginUrl)
})


// membuat route baru

router.get('/google/callback', async (req,res) => {

    const code = req.query.code 
    const {tokens} = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens)
   

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

    res.redirect('/dashboard')
})


export default router