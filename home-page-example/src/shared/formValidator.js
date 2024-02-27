export function emailValidator(email) {
  if (email.indexOf("@") === -1) {
    return {
      email: "Email must contain @",
    };
  }

  if (
    email.indexOf(".com") >= 0 ||
    email.indexOf(".net") ||
    email.indexOf(".org") >= 0
  ) {
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
  if (phonenumber.length != 10) {
    return {
      phonenumber: "phone number must be   10 characters long",
    };
  }
  console.log(phonenumber.length);
}

export function validateUsername(username) {
  console.log(username.search(/[a - z]/));
  if (username.search(/[a - z]/) === -1) {
    console.log(username.search(/[a - z]/i));
    return {
      username: "Username must have  letters",
    };
  }

  if (username.length > 15) {
    return {
      username: "Username can be no more than 15 characters long",
    };
  }
  if (username.length < 5) {
    return {
      username: "Username must be at least 5 characters long",
    };
  }
}

export function passwordValidator(password) {
  if (password.length < 10) {
    return {
      password: "password must be at least 10 characters",
    };
  }
  if (password.search(/[a - z]/) === -1) {
    return {
      password: "password must have atleast one lowercase letters",
    };
  }

  if (password.search(/[A - Z]/) === -1) {
    return {
      password: "password must have atleast one uppercase letters",
    };
  }

  if (password.search(/[1 - 9]/) === -1) {
    return {
      password: "password must have numbers",
    };
  }
  if (password.length > 25) {
    return {
      password: "password must be at most 25 characters",
    };
  }

  if (password.length < 5) {
    return {
      password: "password must be at least 5 characters",
    };
  }
  if (password.search(/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/) === -1) {
    return {
      password: "password must have atleast one special character",
    };
  }

  // if (password.search(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) === -1) {
  //   return {
  //     password: "password must have at least one special character",
  //   };
  // }
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
