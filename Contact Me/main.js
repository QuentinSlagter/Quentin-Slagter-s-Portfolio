const container = document.getElementById('container')
const send = document.getElementsByClass('send')
const form = document.getElementById('form')
const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const message = document.getElementById('message')
const time = document.getElementById('time')

send.addEventListener('click', (e) => {
  e.preventDefault();
  checkInputs();
})

function checkInputs() {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  const timeValue = time.value.trim();

  if(fullNameValue === '') {
    setErrorFor(fullName, 'Name cannot be blank')
  } else {
      setSuccessFor(fullName)
  }

  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank')
  } else {
      setSuccessFor(email)
  }

  if(messageValue === '') {
    setErrorFor(message, 'Message cannot be blank')
    } else {
      setSuccessFor(message)
    }

  if(timeValue === '') {
    setErrorFor(time, 'Time cannot be blank')
    } else {
      setSuccessFor(time)
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