import { registerUser, authorize, getUsers, updateUser } from "./Api";

export const register = (data) => {
  return getUsers().then((users) => {
    const email = data.email.trim().toLowerCase();

    const emailExists = users.some(
      (user) => user.email.trim().toLowerCase() === email,
    );

    if (emailExists) {
      return Promise.reject("Este correo electrónico ya está registrado.");
    }

    return registerUser({
      ...data,
      email,
      favorites: [],
    });
  });
};

export const login = (data) => {
  return authorize(data);
};
