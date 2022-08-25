$(document).ready(function () {
  let fnameError = false;
  let lnameError = false;
  let emailError = false;
  let phoneError = false;
  let libraryNameError = false;
  let genderError = false;
  let paymentError = false;

  $(".error").hide();

  function validate_Fname(value) {
    var pattern = /^[a-zA-Z ]+$/;
    var fname = $("#fname").val();
    if (fname == " ") {
      $("#fname_error").html("1 Please enter a valid first name");
      $("#fname_error").show();
    } else if (pattern.test(fname)) {
      $("#fname_error").hide();
       $("#fname_error").empty();
    } else {
      $("#fname_error").html("Please enter a valid first name");
      $("#fname_error").show();
      fnameError = true;
      return false;
    }
  }
  $("#fname").on("blur", (e) => {
    console.log(e.target.value);
    validate_Fname();
  });

  function validate_Lname() {
    var pattern = /^[a-zA-Z ]+$/;
    var lname = $("#lname").val();
    if (pattern.test(lname) && lname.length >= 3) {
      $("#lname_error").hide();
    } else if (lname == " ") {
      $("#lname_error").html("Please enter a valid Last name");
    } else {
      $("#lname_error").html("Please enter a valid Last name");
      $("#lname_error").show();
      lnameError = true;
      return false;
    }
  }
  $("#lname").blur(() => {
    validate_Lname();
  });

  function validate_email() {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = $("#email").val();
    if (pattern.test(email)) {
      $("#email_error").hide();
    } else {
      $("#email_error").html("Please enter valid Email");
      $("#email_error").show();
      emailError = true;
      return false;
    }
  }
  $("#email").blur(() => {
    validate_email();
  });

  function validate_phone() {
    var pattern = /^\d{10}$/;
    var phone = $("#phone").val();
    if (pattern.test(phone)) {
      $("#phone_error").hide();
    } else {
      $("#phone_error").html("Please enter valid Phone Number");
      $("#phone_error").show();
      phoneError = true;
      return false;
    }
  }
  $("#phone").blur(() => {
    validate_phone();
  });

  function validate_libraryname() {
    var pattern = /^[a-zA-Z ]+$/;
    var libraryname = $("#libraryname").val();
    if (pattern.test(libraryname) && libraryname.length >= 2) {
      $("#libraryname_error").hide();
    } else if (lname == " ") {
      $("#libraryname_error").html("Please enter valid name for library card");
    } else {
      $("#libraryname_error").html("Please enter valid name for library card");
      $("#libraryname_error").show();
      libraryNameError = true;
      return false;
    }
  }
  $("#libraryname").blur(() => {
    validate_libraryname();
  });

  function validate_gender() {
    var gender = $("#gender").val();
    //console.log(gender);
    if (gender == "gender") {
      $("#gender_error").html("Please select gender");
      $("#gender_error").show();
      genderError = true;
      return false;
    } else {
      $("#gender_error").hide();
    }
  }
  $("#gender").blur(() => {
    validate_gender();
  });

  function validate_payment() {
    var radioVal = $("input[name='payment']:checked").val();
    if (radioVal) {
      $("#payment_error").html("You selected " + radioVal + " method");
      $("#payment_error").show();
    } else {
      $("#payment_error").html("Please select a payment method");
      $("#payment_error").show();
      paymentError = true;
      return false;
    }
  }
  $(".radio").click(() => {
    validate_payment();
  });
  $("#registerForm").submit((e) => {
    e.preventDefault();
    validate_Fname();
    validate_Lname();
    validate_email();
    validate_phone();
    validate_libraryname();
    validate_gender();
    validate_payment();

    if (
      fnameError &&
      lnameError &&
      emailError &&
      phoneError &&
      libraryNameError &&
      genderError &&
      paymentError
    ) {
      alert("Error Please fill out the fields");
      return true;
    } else {
      alert("successfully submitted the data");
    }
  });
});
