export function emailValidator(email) {
  if (email.indexOf("@") === -1) {
    return {
      email: "Email must contain @",
    };
  }

  if (email.indexOf(".com") >= 0 || email.indexOf(".net") >= 0) {
    console.log("email is good");
  } else {
    return {
      email: "Must have valid domain",
    };
  }
}

export function phoneNumberValidator(phonenumber) {
  console.log(phonenumber);
  if (phonenumber.search(/[a - z]/) >= -1);
  {
    return {
      phonenumber: "Phone Number is invalid",
    };
  }
}

export function validateUsername(username) {
  if (username.indexOf(/[a - z]/i) === -1);
  {
    console.log("username is bad");
    return {
      username: "Username must have letters",
    };
  }
}

export function passwordValidator(password) {
  if (password.length > 10) {
    return {
      password: "password must be less than 10 characters",
    };
  }
}

export function validateForm(myUser) {
  const errors = [];
  //
  const emailError = emailValidator(myUser.email);

  if (emailError !== undefined) {
    errors.push(emailError);
  }
  const phonenumberError = phoneNumberValidator(myUser.phonenumber);
  if (phonenumberError !== undefined) {
    errors.push(phonenumberError);
  }

  const usernameError = validateUsername(myUser.username);
  if (usernameError !== undefined) {
    errors.push(usernameError);
  }

  const passwordError = passwordValidator(myUser.password);
  if (passwordError !== undefined) {
    errors.push(passwordError);
  }

  return errors;
}
