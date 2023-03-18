import {Router} from 'express'
import { blueshrimpdb } from '../config/database.js'

const mailRoutes = Router()

mailRoutes.post("/email", async (req, res) => {
    const {email} = req.body
    try {
        const emailUser = await blueshrimpdb.collection('email').findOne({email})

        if(emailUser){
            return res.sendStatus(409)
        }

        await blueshrimpdb.collection("email").insertOne({email})
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
})


export {mailRoutes}