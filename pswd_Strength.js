/**
 * Created by surbhigarg on 3/1/16.
 */
var flag = 1;


function passwordStrength() {

    var password = document.getElementById("password").value;
    var len = password.length;

    if (len < 5) {
        document.getElementById("progress1").style.display = 'block';

    }
    if (len >= 5 && len < 9) {
        document.getElementById("progress1").style.display = 'none';
        document.getElementById("progress2").style.display = 'block';
    }

    if (len >= 9 && len < 13) {
        document.getElementById("progress1").style.display = 'none';
        document.getElementById("progress2").style.display = 'none';
        document.getElementById("progress3").style.display = 'block';
    }

    if (len >= 13 && len < 15) {
        document.getElementById("progress2").style.display = 'none';
        document.getElementById("progress3").style.display = 'none';
        document.getElementById("progress4").style.display = 'block';

    }
}


function clear_fields() {
    document.getElementById("progress1").style.display = 'none';
    document.getElementById("progress2").style.display = 'none';
    document.getElementById("progress3").style.display = 'none';
    document.getElementById("progress4").style.display = 'none';
    document.getElementById("passwordVerification1").style.display = 'none';
    document.getElementById("emailVerification1").style.display = 'none';
}
function passwordMatch() {

    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("verifyPassword").value;
    var verfiyPassword = document.getElementById("passwordVerification1");
    if (password1 != password2) {
        verfiyPassword.style.color = 'red';
        verfiyPassword.innerHTML = "Password does not match";
    }
    else {

        verfiyPassword.style.color = 'green';
        verfiyPassword.innerHTML = "Password Matches!!";
    }
}

function secMatch() {

    var sec1 = document.getElementById("securityQuestion1").value;
    var sec2 = document.getElementById("securityQuestion2").value;
    var verfiysec = document.getElementById("security_msg");
    if (sec1 == sec2) {
        security_msg.style.color = 'red';
        security_msg.innerHTML = "Security question can't be same!!";
    }

}
function checkSecQues(form) {
    if (form.securityQuestion1.value == form.securityQuestion2.value) {
        document.getElementById("security_msg").style.display = "inline";
        document.getElementById("security_msg").style.color = "red";
        document.getElementById("security_msg").innerHTML = "Security questions can not be same";
        form.securityQuestion1.focus();
        return false;
    }
}

function emailMatch() {
    var emailVar1 = document.getElementById('email');
    var emailVar2 = document.getElementById('verifyEmail');
    var verifyEmail = document.getElementById('emailVerification1');


    if (emailVar1.value == emailVar2.value) {

        verifyEmail.style.color = 'green';
        verifyEmail.innerHTML = "Email Match.";
    } else {

        verifyEmail.style.color = 'red';
        verifyEmail.innerHTML = "Email do not match.";
    }
}

function validateForm() {
    var x = document.forms["form1"]["first_name"].value && document.forms["form1"]["last_name"].value && document.forms["form1"]["email"].value &&
        document.forms["form1"]["verifyEmail"] &&
        document.forms["form1"]["password"].value && document.forms["form1"]["verifyPassword"].value && document.forms["form1"]["dob"].value &&
        document.forms["form1"]["dob_dt"].value && document.forms["form1"]["dob_loc"].value && document.forms["form1"]["ssn"].value && document.forms["form1"]["phn"].value &&
        document.forms["form1"]["card"].value && document.forms["form1"]["securityAnswer1"].value && document.forms["form1"]["securityAnswer2"].value;
    if (x == null || x == "") {
        alert("Form cannot contain empty field");
        return false;
    }
}

function sessionStore() {

    var form = document.getElementById("form1");

    var first_name = document.getElementById("first_name").value;
    sessionStorage.setItem("First Name ", first_name);

    var last_name = document.getElementById("last_name").value;
    sessionStorage.setItem("Last Name ", last_name);

    var password = document.getElementById("password").value;
    sessionStorage.setItem("Password", password);

    var verifyPassword = document.getElementById("verifyPassword").value;
    sessionStorage.setItem("Verify Password", verifyPassword);

    var email = document.getElementById("email").value;
    sessionStorage.setItem("Email", email);

    var verifyEmail = document.getElementById("verifyEmail").value;
    sessionStorage.setItem("Verify Email", verifyEmail);

    var phn = document.getElementById("phn");
    sessionStorage.setItem("Telephone", phn.value);

    var dob = document.getElementById("dob");
    sessionStorage.setItem("D.O.B ", dob.value);

    var ssn = document.getElementById("ssn");
    sessionStorage.setItem("SSN", ssn.value);

    var card = document.getElementById("card");
    sessionStorage.setItem("Card ", card.value);

    var dob_dt = document.getElementById("dob_dt");
    sessionStorage.setItem("D.O.B with time", dob_dt.value);

    var dob_loc = document.getElementById("dob_loc");
    sessionStorage.setItem("Local D.O.B", dob_loc.value);

    var e = document.getElementById("securityQuestion1");
    var checkValue = e.options[e.selectedIndex].text;
    sessionStorage.setItem("Security Question1", checkValue);

    var e1 = document.getElementById("securityQuestion2");
    var checkValue1 = e1.options[e1.selectedIndex].text;
    sessionStorage.setItem("Security Question2", checkValue1);

    var securityAnswer1 = document.getElementById("securityAnswer1");
    sessionStorage.setItem("Security Answer1", securityAnswer1.value);

    var securityAnswer2 = document.getElementById("securityAnswer2");
    sessionStorage.setItem("Security Answer2", securityAnswer2.value);

}
