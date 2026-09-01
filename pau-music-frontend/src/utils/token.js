const TOKEN_KEY = "BxvDg2dyXwd";

export const setToken = (user) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(user));
};

export const getToken = () => {
  const user = localStorage.getItem(TOKEN_KEY);

  return user ? JSON.parse(user) : null;
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
