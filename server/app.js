    var express = require('express');
    var path = require('path');
    var http = require('http');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var mongoose = require('mongoose');

    var index = require('./routes/index');

    var app = express();

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.set('mongodb_uri', 'mongodb://localhost/lab3');
    app.db = mongoose.connect(app.get('mongodb_uri'));

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.set('port', process.env.PORT || 9000);



    var Registration = mongoose.model('Registration',{
        fName: {type: String},
        lName: {type: String},
        email: {type: String},
        password: {type: String},
        mobile: {type: String},
        dob: {type: String},
        ssn: {type: String},
        card: {type: String},
        securityQuestion1: {type: String},
        securityQuestion2: {type: String},
        securityAnswer1: {type: String},
        securityAnswer2: {type: String},
        captcha: {type: String}
    });

    var port = 9000;

    app.post("/register", function(request, response) {

        response.setHeader('access-control-allow-origin', '*');
        console.log(request.body);

        var registration = new Registration({
            fName: request.body.FirstName,
            lName: request.body.LastName,
            email: request.body.Email,
            password: request.body.Password,
            mobile: request.body.Mobile,
            dob: request.body.dob,
            ssn: request.body.ssn,
            card: request.body.card,
            securityQuestion1: request.body.SecurityQuestion1,
            securityQuestion2: request.body.SecurityQuestion2,
            securityAnswer1: request.body.SecurityAnswer1,
            securityAnswer2: request.body.SecurityAnswer2,
            captcha: request.body.captcha
        });

        registration.save(function (err, registrationObject) {
            if (err) {
                console.log(err);
            } else {
                console.log('Data saved successfully in MongoDb: ', registrationObject);
            }
        });
    });

    app.listen(port, function() {
        console.log('Server started... Listening at port 9000')
    });

