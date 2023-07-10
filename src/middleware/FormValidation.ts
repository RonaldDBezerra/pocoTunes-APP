function emailValidation(email: string): boolean {
  const validationOne = email.includes('@');
  const validationTwo = email.includes('.com');

  if (!validationOne || !validationTwo) {
    return false;
  }

  return true;
}

function passWordValidation(passWord: string): boolean {
  const validationOne = passWord.length;
  const minPasswordLength = 6;

  if (Number(validationOne) < minPasswordLength) {
    return false;
  }

  return true;
}

export {
  emailValidation,
  passWordValidation
}
