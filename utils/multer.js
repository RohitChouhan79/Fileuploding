const multer=require("multer")
const path=require("path")
const storage=multer.diskStorage({
    destination: function(req,file,cb){
        console.log(file);
        cb(null,"./public/uploads");
    },
    filename:function(req,file,cb){
        let modifyfiedfilename=file.fieldname+"-"+Date.now()+path.extname(file.originalname)
        cb(null,modifyfiedfilename)
    }
})

const uploads=multer({
    storage:storage,
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