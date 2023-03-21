import {Router} from 'express'
import { emailController } from '../controllers/emailController.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { createEmailSchema } from '../schemas/createEmailSchema.js'

const mailRoutes = Router()

mailRoutes.post("/email", validateSchema(createEmailSchema), emailController.createEmail)

export {mailRoutes}