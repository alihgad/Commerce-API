import joi from "joi";

export default {
    password: joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    email: joi.string().email(),
    headers: joi.object({
        'content-type': joi.string(),
        'user-agent': joi.string(),
        accept: joi.string(),
        'postman-token': joi.string(),
        host: joi.string(),
        'accept-encoding': joi.string(),
        connection: joi.string(),
        'content-length': joi.string(),
        "token": joi.string().required().min(20),

    }),
    file: joi.object({
        fieldname: joi.string().required(),
        originalname: joi.string().required(),
        encoding:joi.string().required(),
        mimetype:joi.string().required(),
        destination: joi.string().required(),
        filename: joi.string().required(),
        path:joi.string().required(),
        size: joi.number().required()
    }).required()
}