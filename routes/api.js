const express = require('express');
const multer = require('multer');
const registrationcontroller = require('../controller/registration');
const auth = require('../controller/middleware.js');

const app = express();
const router = express.Router();

// Define your routes here
router.get('/example', (req, res) => {
  res.send('Example route');
});
  
  // const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, 'uploads/'); 
//   },
//   filename: function(req, file, cb) {
//     cb(null, file.originalname); 
//   }
// });

//const upload = multer({ storage: storage });
//router.get('/file/:id', auth, registrationcontroller.getFile);
app.post('/emergency/register', registrationcontroller.emergencyRegister);
app.post('/emergency/login', registrationcontroller.emergencyLogin);
app.post('/bharosa/register', registrationcontroller.bharosaRegister);
app.post('/bharosa/login', registrationcontroller.bharosaLogin);
app.post('/athamanurbar/register', registrationcontroller.athamanurbarRegister);
app.post('/legaladminstration/login',registrationcontroller.legalAdministrationLogin);
app.post('/legaladminstration/register', registrationcontroller.legalAdministrationRegister);
app.post('/athamanurbar/login',registrationcontroller.athamanurbarLogin);
//app.post('/upload', auth,upload.single('file'),registrationcontroller.uploadFile);
app.get('/file',auth ,registrationcontroller.getFile);
app.post('/contact', registrationcontroller.addContact);
app.put('/contact/:id', registrationcontroller.updateContact);
app.get('/contact/:id', registrationcontroller.getContact);
app.post('/register', registrationcontroller.fileuploadRegister);
app.post('/login', registrationcontroller.fileuploadLogin);




const AWS = require('aws-sdk');
const fs = require('fs');


// Set the AWS credentials and region
AWS.config.update({
    accessKeyId: 'AKIATCKANFEUJTJXDG5C',
    secretAccessKey: '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',
    region: 'ap-south-1'
});

// Create an S3 service object
const s3 = new AWS.S3();

// Set up multer for handling multipart/form-data
const upload = multer({ dest: 'uploads/' }); // Set your desired upload directory

// Define the route for file upload
// app.post('/upload', auth,upload.single('file'), (req, res) => {
//     // File should be available as req.file
//     const filePath = req.file.path;
//     const fileName = req.file.originalname;

//     // Specify the bucket name
//     const bucketName = 'wecare121';

//     // Read the file
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             console.error("Error reading file:", err);
//             res.status(500).send("Error uploading file");
//             return;
//         }

//         // Set the parameters for uploading
//         const uploadParams = {
//             Bucket: bucketName,
//             Key: fileName,
//             Body: data
//         };

//         // Upload the file to the S3 bucket
//         s3.upload(uploadParams, (err, uploadData) => {
//             if (err) {
//                 console.error("Error uploading file:", err);
//                 res.status(500).send("Error uploading file");
//                 return;
//             }
//             console.log("File uploaded successfully. Location:", uploadData.Location);
//             res.send("File uploaded successfully");
//         });
//     });
// });

app.post('/upload', auth,upload.single('file'),registrationcontroller.uploadFile)














module.exports = app;
