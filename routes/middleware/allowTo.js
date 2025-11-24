const AppError = require("../../Utiles/app.error");

module.exports = (...roles)=>{
        console.log("roles",roles);

    return(req,res,next)=>{
        if (!roles.includes(req.decodedToken.role)) {
    return next(new AppError("this role in not authorized", 401, "fail"));
                // return next(appError.create("this role in not authorized", 404));

        }
        next();

    }
}