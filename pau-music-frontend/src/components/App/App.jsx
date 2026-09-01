import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Home from "../Main/Home/Home.jsx";
import Footer from "../Footer/Footer.jsx";
import Popup from "../Main/Popup/Popup.jsx";
import Login from "../Main/Login/Login.jsx";
import StudentsPage from "../Main/StudentsPage/StudentsPage.jsx";
import ProtectedRoute from "../Main/ProtectedRoute/ProtectedRoute.jsx";
import InfoTooltip from "../Main/InfoTooltip/InfoTooltip.jsx";
import Preloader from "../Main/Preloader/Preloader.jsx";

import CurrentUserContext from "../../context/CurrentUserContext.js";
import * as auth from "../../utils/Auth.js";
import { getToken, setToken, removeToken } from "../../utils/token.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [popup, setPopup] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getToken();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  function handleRegister(data) {
    setIsLoading(true);
    auth
      .register(data)
      .then((user) => {
        console.log("Usuario registrado:", user);

        showSuccessMessage();
      })
      .catch((err) => {
        console.error(err);

        showErrorMessage(
          "No pudimos completar tu registro. Por favor, verifica tus datos e inténtalo nuevamente.",
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleLogin(data) {
    setIsLoading(true);
    auth
      .login(data)
      .then((user) => {
        setToken(user);
        setCurrentUser(user);

        handleClosePopup();
        navigate("/students");
      })
      .catch((err) => {
        console.error(err);

        showErrorMessage(
          "El correo electrónico o la contraseña son incorrectos.",
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function showLoginPopup() {
    handleOpenPopup({
      title: "Iniciar sesión",
      children: <Login onLogin={handleLogin} />,
    });
  }

  function showSuccessMessage() {
    handleOpenPopup({
      title: "",
      children: (
        <InfoTooltip
          isSuccess={true}
          message="Tu cuenta ha sido creada correctamente. ¡Ahora puedes iniciar sesión!"
          onClose={showLoginPopup}
        />
      ),
    });
  }

  function showErrorMessage(message) {
    handleOpenPopup({
      title: "",
      children: (
        <InfoTooltip
          isSuccess={false}
          message={message}
          onClose={handleClosePopup}
        />
      ),
    });
  }

  function handleLogout() {
    removeToken();
    setCurrentUser(null);
    navigate("/");
  }

  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          popup,
          handleOpenPopup,
          handleClosePopup,
          handleRegister,
          handleLogin,
          handleLogout,
          isLoading,
          setIsLoading,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/students"
            element={
              <ProtectedRoute>
                <StudentsPage />
              </ProtectedRoute>
            }
          />
        </Routes>

        {popup && (
          <Popup title={popup.title} onClose={handleClosePopup}>
            {popup.children}
          </Popup>
        )}
        {isLoading && <Preloader />}
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
