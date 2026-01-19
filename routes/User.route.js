const express = require('express');
const router = express.Router();
const usersControler = require('../controler/users.controler')
const verfiyToken = require('./middleware/verfayToken');
//multer
const  multer = require('multer');
const AppError = require('../Utiles/app.error');
const loginLimiter = require('./middleware/rateLimit');

const diskStorge =multer.diskStorage({
    destination:function(req,file,cb){
        console.log("file",file);
        cb(null,"uploads");
    },
    filename:function(req,file ,cb){
        const ext = file.mimetype.split('/')[1];
        const filename = `user-${Date.now()}.${ext}`;
        cb(null,filename);
    }
}) 
const fileFilter = (req,file,cb)=>{
    const imageType = file.mimetype.split('/')[0];

    if (imageType === 'image') {
        return cb(null,true)
    }else{
        return cb(new AppError("file must be an image",400),false)
    }
}
const upload = multer({
    storage: diskStorge,
    fileFilter,
    limits:{
        fileSize:10 * 1024 *1024
    }

})

//get all user
//register
//login


//Route of getAll users
router.route('/')
                
            .get( verfiyToken,usersControler.getAllUsers)

//Route of Register
router.route('/register')
            .post( upload.single('avatar'),usersControler.Register)


router.route('/login')
            .post(loginLimiter,usersControler.Login)
module.exports=router;