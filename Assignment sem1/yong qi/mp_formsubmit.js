window.onload = init;

function init() {
    document.form[0].onsubmit=function() {
        if (this.checkValidity()) 
        alert("Successful login your profile. Please enjoy on your purchasing");
        return true;
    }
}
