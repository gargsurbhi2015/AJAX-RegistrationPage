var express = require('express');
var router = express.Router();


router.post('/register', function (req, res) {

    var User = req.app.db.models.User;

    var registrationDetails = new User({
        fName: request.body.FirstName,
        lName: request.body.LastName,
        email: request.body.Email,
        password: request.body.Password,
        mobile: request.body.Mobile,
        dob: request.body.dob,
        ssn: request.body.Ssn,
        card: request.body.card,
        securityQuestion1: request.body.SecurityQuestion1,
        securityQuestion2: request.body.SecurityQuestion2,
        securityAnswer1: request.body.SecurityAnswer1,
        securityAnswer2: request.body.SecurityAnswer2,
        captcha: request.body.captcha
    });


    console.log(registrationDetails);


    registrationDetails.save(function(err, resObj){
        if(err)
            console.log(err);
        else {
            console.log(resObj);
        }
    });


});

module.exports = router;
