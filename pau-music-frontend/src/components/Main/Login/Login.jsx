import { useState } from "react";

export default function Login({ onLogin }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(data);
  };
  return (
    <>
      <form
        className="popup__form"
        onSubmit={handleSubmit}
        name="login-form"
        id="login-form"
        noValidate
      >
        <label className="popup__form-label">
          <input
            className="popup__input popup__input_type_email"
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={data.email}
            onChange={handleChange}
            required
          />
        </label>
        <span className="popup__form-error" id="email-error"></span>
        <label className="popup__form-label">
          <input
            className="popup__input popup__input_type_password"
            type="password"
            name="password"
            placeholder="Contraseña"
            value={data.password}
            onChange={handleChange}
            required
          />
        </label>
        <span className="popup__form-error" id="password-error"></span>
        <button type="submit" className="popup__submit-button">
          Iniciar sesión
        </button>
      </form>
    </>
  );
}
