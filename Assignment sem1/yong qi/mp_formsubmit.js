window.onload=setForm;

fuctionsetForm(){
    document.form[0].onsubmit=function(){
        if(this.checkValidity()alert("No invalid data detected.Will retain data for further testing");
        return true;
    }
}