import { useState } from "react";

export default function Register({ onRegister }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
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
    onRegister(data);
  };
  return (
    <>
      <form
        className="popup__form"
        name="register-form"
        id="register-form"
        noValidate
        onSubmit={handleSubmit}
      >
        <label className="popup__form-label">
          <input
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={data.name}
            onChange={handleChange}
            required
          />
        </label>
        <span className="popup__form-error" id="name-error"></span>
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
        <label className="popup__form-label">
          <select
            className="popup__input popup__input_type_course"
            name="course"
            value={data.course}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecciona un curso
            </option>
            <option value="piano">Curso de Piano</option>
            <option value="guitarra">Curso de Guitarra</option>
          </select>
        </label>
        <span className="popup__form-error" id="course-error"></span>

        <button type="submit" className="popup__submit-button">
          Regístrate
        </button>
      </form>
      <div className="register__signin">
        <p>¿Ya tienes una cuenta?</p>
        <button to="/signin" className="register__login-link">
          Inicia sesión aquí
        </button>
      </div>
    </>
  );
}
