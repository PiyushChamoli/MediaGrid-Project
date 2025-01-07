const checkValidation = (emailRef, passwordRef) => {
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }

  if (!passwordRegex.test(password)) {
    return "Password must be at least 8 characters long and contain both letters and numbers";
  }

  return "";
};

export default checkValidation;
