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




const upload = multer({ dest: 'uploads/' });
router.get('/file/:id', auth, registrationcontroller.getFile);
app.post('/emergency/register', registrationcontroller.emergencyRegister);
app.post('/emergency/login', registrationcontroller.emergencyLogin);
app.post('/bharosa/register', registrationcontroller.bharosaRegister);
app.post('/bharosa/login', registrationcontroller.bharosaLogin);
app.post('/athamanurbar/register', registrationcontroller.athamanurbarRegister);
app.post('/legaladminstration/login',registrationcontroller.legalAdministrationLogin);
app.post('/legaladminstration/register', registrationcontroller.legalAdministrationRegister);
app.post('/athamanurbar/login',registrationcontroller.athamanurbarLogin);
app.post('/upload', upload.single('file'), registrationcontroller.uploadFile);
app.get('/file/:id', registrationcontroller.getFile);
app.post('/contact', registrationcontroller.addContact);
app.put('/contact/:id', registrationcontroller.updateContact);
app.get('/contact/:id', registrationcontroller.getContact);


module.exports = app;
