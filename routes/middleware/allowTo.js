const AppError = require("../../Utiles/app.error");

module.exports = (...roles)=>{
        console.log("roles",roles);

    return(req,res,next)=>{
        if (!roles.includes(req.decodedToken.role)) {
    return next(
new AppError("Forbidden: You do not have permission", 403, "fail")
);

        }
        next();

    }
}