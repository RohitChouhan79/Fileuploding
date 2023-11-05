const multer=require("multer") 
const path=require("path")
const storage=multer.diskStorage({
    // destination helps to find the destination of uploading file
    destination: function(req,file,cb){
        console.log(file);
        cb(null,"./public/uploads");
    },
    // this file name will give a unique file name
    filename:function(req,file,cb){
        let modifyfiedfilename=file.fieldname+"-"+Date.now()+path.extname(file.originalname)
        cb(null,modifyfiedfilename)
    }
})

const uploads=multer({
    storage:storage,
    // filefilter will check file extention then file will will uploades
    fileFilter: function (req, file, cb) {
        let filetypes = /jpeg|jpg|png|gif|webp|svg/;
        let mimetype = filetypes.test(file.mimetype);
        let extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(
            "Error: File upload only supports the following filetypes - " +
                filetypes
        );
    },
})

module.exports=uploads;