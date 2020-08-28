const cloudinary = require('cloudinary');
const dotenv=require('dotenv');

dotenv.config();

cloudinary.config({
    cloud_name: 'dghsgfxb9',
    api_key: 913525597297392,
    api_secret: 'K_hF8bPDA3TkfjHT7oXYr12wc9E',
})

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}