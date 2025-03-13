const inputEl = document.getElementById('email');


const maskEmail = (email) => {
  let emailUsername = email.slice(0, email.indexOf("@"));
  let partOfEmailToMask = email.slice(1, -1);
  let maskedEmail = emailUsername.replace(partOfEmailToMask, "*".repeat(partOfEmailToMask.length));
  console.log(maskedEmail);
}

maskEmail("example@test.com");