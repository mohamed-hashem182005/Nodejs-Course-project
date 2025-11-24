
const jwt = require('jsonwebtoken');

module.exports = async function(payload){
   const token =  await jwt.sign(
    payload,
    process.env.JWT_SECRET_KEY,
    {expiresIn:'5m'}
)
return token;

}