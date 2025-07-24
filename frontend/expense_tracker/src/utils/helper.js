//purpose, checks if i given string is a valid email format. get two initials from a fullname string and return in uppercase

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
};

//extracts the intials of names (for profile pictures)
//The helper.js file contains reusable utility functions that help simplify and organize common operations used across your app.
