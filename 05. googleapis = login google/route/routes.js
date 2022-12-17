import express from 'express'
import { loginUrl } from '../googleapis-config.js'

const router = express.Router()


// kita redirect ke url yang sudah kita buat 
router.get('/google',(req,res) => {
    res.redirect(loginUrl)
})

// jangan lupa kasih routenya pada tag a dihalamanya



export default router