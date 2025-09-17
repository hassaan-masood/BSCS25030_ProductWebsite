function wind(){
    alert ("Welcome to AMD.");
}
function checkav()
{
    alert("Procuct is available.");
}
function ntavail()
{
     alert("Procuct is not available.");
}


window.onload = wind();

new Date().getFullYear();

document.getElementById("year").innerHTML = new Date().getFullYear();


document.getElementById('myForm').addEventListener('submit', function(event)
{
  event.preventDefault(); 

  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');
  let nameError = document.getElementById('nameError');
  let emailError = document.getElementById('emailError');

  let isValid = true;


  nameError.textContent = '';
  emailError.textContent = '';


if (nameInput.value.trim() === '') 
{
    nameError.textContent = 'Name is required.';
    isValid = false;
}


if (emailInput.value.trim() === '')
{
    emailError.textContent = 'Email is required.';
    isValid = false;
}
else if (!isValidEmail(emailInput.value))
{
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
}

if (isValid)
{
    alert('Form submitted successfully!');
}
});

function isValidEmail(email)
{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

