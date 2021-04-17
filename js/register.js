const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


// Show input message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
  
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// const successMsg = () =>{
//   let formCon = document.getElementsByClassName('form-contorl');
//   var count = formCon.length - 1;
//   for(var i = 0; i < formCon.length; i++){
//     if(formCon[i].className === "form-control success"){
//       var sRate = 0+i;
//       console.log(sRate)
//       sendData(count);
//     }else{
//       return false;
//     }
//   }
  
// }




// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input, input2) {
  if (input.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Get fieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Lsitener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);

});


//Registration check
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "" || x == null) {
    
    return false;
  }else{
    setInterval(function(){ location.href = `Login.html?username=${email}${password}`; }, 3000)
  }
}


 var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(email,password){
var username = document.getElementById("email1").value;
var password = document.getElementById("password1").value;
if(username === "" && password === "" ){
  swal("Sorry...!","Invalid input"+  password , "error");
  return false;

}
else if ( username === username && password === password ){
swal("Welcome...!",  username , "success");
setInterval(function(){ location.href = "index.html"; }, 3000)
console.log(username)

return false;
}

else{
  
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("email1").disabled = true;
document.getElementById("password1").disabled = true;
document.getElementById("submit1").disabled = true;
return false;
}
}
}

