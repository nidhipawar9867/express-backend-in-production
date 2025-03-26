import multer from 'multer';
export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const filename = Date.now()+"_"+file.originalname
      cb(null,filename)
    },
    
  })