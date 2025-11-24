const { body } = require("express-validator")

const validationSchema = ()=>{
return [
                body('title')
                        .notEmpty()
                        .withMessage('title is required')
                        .isLength({min:2}),
                body('price')
                        .notEmpty()
                        .withMessage('Price is Required')
                        ]

}

module.exports = validationSchema;