const container = document.getElementById('container')

const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'))
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'))

const realSignUpButton = document.getElementById('realSignUp')
const realSignInButton = document.getElementById('realSignIn')

const form = document.getElementById('form')
const userName = document.getElementById('userName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

realSignUp.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
 })

 realSignIn.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
 })

function checkInputs() {
   const  userNameValue = userName.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const confirmPasswordValue = confirmPassword.value.trim();

   if(userNameValue === '') {
    setErrorFor(userName, 'Username cannot be blank')
   } else {
      setSuccessFor(userName)
   }

   if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank')
   } else {
      setSuccessFor(email)
   }

  if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank')
    } else {
      setSuccessFor(password)
    }

  if(confirmPasswordValue === '') {
    setErrorFor(confirmPassword, 'Confirm password cannot be blank')
    } else if (password !== passwordConfirm) {
      setErrorFor(confirmPassword, 'Passwords do not match')
    } else {
      setSuccessFor(confirmPassword)
    }
 }

function setErrorFor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
   small.innerText = message;
   formControl.className = 'form-control error';
 }

 function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
 }