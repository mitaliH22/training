function validate(){
    var fname = document.registerForm.fname;
    var lname = document.registerForm.lname;
    var email = document.registerForm.email;
    var phone = document.registerForm.phone;
    var libraryname = document.registerForm.libraryname;
    var gender = document.registerForm.gender;
    var payment = document.registerForm.payment;

    if(fname.value.length <= 0 ){
        var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        var firstname = fname.value;
        alert("Please enter First name");
        fname.focus();
        return false;
    }
    if (lname.value.length <= 0) {
      alert("Please enter last name");
      lname.focus();
      return false;
    }
    if (email.value.length <= 0) {
      alert("Please enter Email");
      email.focus();
      return false;
    }
    if (phone.value.length <= 0) {
      alert("Please enter Phone number");
      phone.focus();
      return false;
    }
    if (libraryname.value.length <= 0) {
      alert("Please enter Library name");
      libraryname.focus();
      return false;
    }
    if (gender.value == "gender") {
      alert("Please enter Gender");
      gender.focus();
      return false;
    }
    if (payment.value.length <= 0) {
      alert("Please select the payment method");
      payment.focus();
      return false;
    }
    return false;
}
