import joi from "joi"

export const createEmailSchema = joi.object({
    email: joi.string().email().required()
})