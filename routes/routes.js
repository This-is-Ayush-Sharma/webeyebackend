const app = require('express')();

// controllers
const contactHandler = require('../controllers/conatctus.controller');
const formHandler = require('../controllers/formHandler.controller');

app.get('/health',(req,res)=>{
    return res.send("App is live");
});

app.post('/contact', contactHandler.ContactUsHandler);
app.post('/form', formHandler.formSubmit);

module.exports = app;