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
  if (phonenumber.search(/[a - z]/) != -1) {
    console.log(phonenumber.search(/[a - z]/));
    return {
      phonenumber: "Phone Number is invalid",
    };
  }
  if (phonenumber.length < 25) {
    return {
      phonenumber: "phone number must be atleast  characters long",
    };
  }
  console.log(phonenumber.length);
}

export function validateUsername(username) {
  console.log(username.search(/[a - z]/));
  if (username.search(/[a - z]/) === -1) {
    console.log(username.search(/[a - z]/));
    return {
      username: "Username must have lowercase letters",
    };
  }
  if (username.search(/[A - Z]/) === -1) {
    console.log(username.search(/[A - Z]/));
    return {
      username: "username must have capital letters",
    };
  }
}

export function passwordValidator(password) {
  if (password.length < 10) {
    return {
      password: "password must be at least 10 characters",
    };
  }
  if (password.search(/[a - z]/i) === -1) {
    return {
      password: "password must have letters",
    };
  }
  if (password.search(/[1 - 9]/) === -1) {
    return {
      password: "password must have numbers",
    };
  }
}

export function validateForm(myUser) {
  const errors = [];
  //
  const emailError = emailValidator(myUser.email);
  const phonenumberError = phoneNumberValidator(myUser.phonenumber);

  if (emailError !== undefined) {
    errors.push(emailError);
  }

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
