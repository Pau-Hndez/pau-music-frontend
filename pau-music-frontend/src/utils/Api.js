export const BASE_URL = "https://6a90c81dff2484963a5e343c.mockapi.io/api/users";

export const getUsers = () => {
  return fetch(`${BASE_URL}/register`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

export const registerUser = (data) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

export const authorize = ({ email, password }) => {
  return getUsers().then((users) => {
    const user = users.find(
      (user) =>
        user.email.trim().toLowerCase() === email.trim().toLowerCase() &&
        user.password === password,
    );

    if (!user) {
      return Promise.reject(
        "El correo electrónico o la contraseña son incorrectos.",
      );
    }

    return user;
  });
};

export const updateUser = (userId, data) => {
  return fetch(`${BASE_URL}/register/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};
