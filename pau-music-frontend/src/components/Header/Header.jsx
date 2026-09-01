import logo from "../../assets/images/logo.png";
import { useContext, useState } from "react";

import currentUserContext from "../../context/CurrentUserContext.js";
import Register from "../Main/Register/Register.jsx";
import Login from "../Main/Login/Login.jsx";

export default function Header({ isStudentPage = false }) {
  const userContext = useContext(currentUserContext);

  const { handleOpenPopup, handleRegister, handleLogin, handleLogout } =
    userContext;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const newRegisterPopup = {
    title: "Registro de usuario",
    children: <Register onRegister={handleRegister} />,
  };

  const newLoginPopup = {
    title: "Iniciar sesión",
    children: <Login onLogin={handleLogin} />,
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isStudentPage ? "header_student" : ""}`}>
      <div className="header__content">
        <img className="header__logo" src={logo} alt="Pau Music Logo" />

        {isStudentPage ? (
          <button
            type="button"
            className="header__logout-button"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        ) : (
          <>
            <button
              type="button"
              className="header__menu-button"
              onClick={handleMenuToggle}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
            >
              ☰
            </button>

            <nav
              className={`header__nav ${isMenuOpen ? "header__nav_open" : ""}`}
            >
              <a
                href="#sobre-mi"
                className="header__nav-button"
                onClick={handleMenuClose}
              >
                Sobre mí
              </a>

              <a
                href="#cursos"
                className="header__nav-button"
                onClick={handleMenuClose}
              >
                Cursos
              </a>

              <a
                href="#estudiantes"
                className="header__nav-button"
                onClick={handleMenuClose}
              >
                Mis estudiantes
              </a>

              <button
                type="button"
                className="header__nav-button header__nav-button-login"
                onClick={() => {
                  handleOpenPopup(newLoginPopup);
                  handleMenuClose();
                }}
              >
                Ya soy estudiante
              </button>

              <button
                type="button"
                onClick={() => {
                  handleOpenPopup(newRegisterPopup);
                  handleMenuClose();
                }}
                className="header__nav-button header__nav-button-register"
              >
                ¡Quiero iniciar hoy!
              </button>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
