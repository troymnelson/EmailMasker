const inputEl = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
const formEl = document.getElementById('mask-this');

const maskEmail = (email) => {
  let emailUsername = email.slice(0, email.indexOf("@"));
  let partOfEmailToMask = emailUsername.slice(1, -1);
  let maskedEmail = emailUsername.replace(partOfEmailToMask, "*".repeat(partOfEmailToMask.length));
  let newEmail = maskedEmail + email.slice(email.indexOf('@'));
  return newEmail;

}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let result = maskEmail(inputEl.value);
  const newEl = document.createElement('p');
  newEl.textContent = `Masked Email: ${result}`
  formEl.appendChild(newEl);
});

