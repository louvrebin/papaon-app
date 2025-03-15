export const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

// 또는 default export 방식으로 변경
export default isValidEmail;
