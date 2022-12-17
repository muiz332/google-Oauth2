import { google } from 'googleapis'

function getUserInfo(oauth2Client){
    return new Promise(function(resolve,reject){
        const oauth2 = google.oauth2({
            auth : oauth2Client,
            version : 'v2'
        })
    
        oauth2.userinfo.get(async function(err,res){
            if(err){
                reject(err)
            }else{
                const info = {
                    id : res.data.id,
                    name : res.data.name,
                    email : res.data.email,
                    img : res.data.picture 
                }
                resolve(info)
            }
        })
    })
}

export default getUserInfo