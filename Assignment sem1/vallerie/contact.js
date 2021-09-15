
var input_fname = document.getElementById('first_name');
input_fname.oninvalid = function(event){
    event.target.setCustomValidity('First name should only contain lowercase and uppercase letter.');
}

var input_lname = document.getElementById('last_name');
input_lname.oninvalid = function(event){
    event.target.setCustomValidity('Last name should only contain lowercase and uppercase letter.');
}

var input_email = document.getElementById('email');
input_email.oninvalid = function(event) {
    event.target.setCustomValidity('Please enter a valid email.');
}

var input_phone = document.getElementById('phone');
input_phone.oninvalid = function(event) {
    event.target.setCustomValidity('Please enter a valid phone number.');
}

var input_city = document.getElementById('city');
input_city.oninvalid = function(event) {
    event.target.setCustomValidity('Please enter a valid city');
}

var input_postal = document.getElementById('postal');
input_postal.oninvalid = function(event) {
    event.target.setCustomValidity('Postal code should only contain 5 numerical number.');
}








