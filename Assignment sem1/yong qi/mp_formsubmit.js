window.onload=setForm;

function setForm(){
    document.form[0].onsubmit=function(){
        if(this.checkValidity())
        alert("Successful entered the details.Please enjoy on your purchasing");
        return true;
    }
}