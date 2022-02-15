// Dropdown menu in navigation bar
document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

  let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.toggle('active')
    }
  document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('active')
  })
})
// End of dropdown menu

// Navigation bar to scroll through the home page
$(document).ready(function(){

	$("nav a").on("click", function(event){
		event.preventDefault();
		$("nav").addClass("fixed");
		id = ($(this).attr("href"));
		scrollVertical = $(id).offset().top;

		$("body, html").animate({scrollTop: scrollVertical});
	});

	$(document).on("scroll", function(){
		secondPage = $("nav li:nth-child(2) a").attr("href");

		if ( $("body").scrollTop() >= $("nav").height() )
		{
			$("nav").addClass("fixed");
		} else {
			$("nav").removeClass("fixed");
		}
	});
});
// End of navigation bar

// Contact form
const contactForm = document.getElementById('contactForm');
const contactButton = document.getElementById('contactButton');
const form = document.getElementsByClassName('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const mobileNumber = document.getElementById('mobileNumber');
const message = document.getElementById('message');

contactForm.addEventListener('submit', e => {

	checkInputs();

	if (isFormValid() == true) {
		form.submit();
	} else {
		e.preventDefault();
	}
});

function isFormValid() {
	const inputContainers = contactForm.querySelectorAll('.form-control');
	let result = true;
	inputContainers.forEach((container) => {
		if(container.classList.contains('error')) {
			result = false;
		}
	})
	return result;
}

function checkInputs() {
  const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const mobileNumberValue = mobileNumber.value.trim();
  const messageValue = message.value.trim();

  if(firstNameValue === '') {
  setErrorFor(firstName, 'First name cannot be blank');
  } else {
    setSuccessFor(firstName);
  }

	if(lastNameValue === '') {
		setErrorFor(lastName, 'Last name cannot be blank');
		} else {
			setSuccessFor(lastName);
		}

  if(emailValue === '') {
  setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if(mobileNumberValue === '') {
    setErrorFor(mobileNumber, 'Phone number cannot be blank');
    } else if (!isMobileNumberValid(mobileNumberValue)) {
			setErrorFor(mobileNumber, 'Not a valid phone number');
		} else {
      setSuccessFor(mobileNumber);
    }

  if(messageValue === '') {
    setErrorFor(message, 'Message cannot be blank');
    }else {
			setSuccessFor(message);
    }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isMobileNumberValid(mobileNumber) {
	return /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g.test(mobileNumber);
}

function isEmailValid(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
// End of contact form
