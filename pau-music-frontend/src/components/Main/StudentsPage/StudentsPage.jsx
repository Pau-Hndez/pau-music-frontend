import { useContext, useEffect, useState } from "react";

import CurrentUserContext from "../../../context/CurrentUserContext.js";
import Header from "../../Header/Header.jsx";

import { searchYouTube } from "../../../utils/youtubeApi.js";
import { updateUser } from "../../../utils/Api.js";

export default function StudentsPage() {
  const { currentUser, setCurrentUser, isLoading, setIsLoading } =
    useContext(CurrentUserContext);

  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState(currentUser?.favorites || []);

  useEffect(() => {
    if (currentUser) {
      setFavorites(currentUser.favorites || []);
    }
  }, [currentUser]);

  const course = currentUser?.course;

  const courseTitle =
    course === "piano" ? "Curso de Piano" : "Curso de Guitarra";

  const instrument = course === "piano" ? "piano" : "guitarra";

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    setIsLoading(true);
    setError("");

    searchYouTube(`${instrument} ${search}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        console.error(err);
        setError("No pudimos cargar los videos. Inténtalo nuevamente.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleFavorite = (video) => {
    const videoId = video.id.videoId;

    const alreadyFavorite = favorites.some(
      (favorite) => favorite.videoId === videoId,
    );

    let updatedFavorites;

    if (alreadyFavorite) {
      updatedFavorites = favorites.filter(
        (favorite) => favorite.videoId !== videoId,
      );
    } else {
      updatedFavorites = [
        ...favorites,
        {
          videoId,
          title: video.snippet.title,
          channelTitle: video.snippet.channelTitle,
          thumbnail: video.snippet.thumbnails.high.url,
        },
      ];
    }

    setFavorites(updatedFavorites);
    setIsLoading(true);

    updateUser(currentUser.id, {
      ...currentUser,
      favorites: updatedFavorites,
    })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((err) => {
        console.error("Error al guardar favorito:", err);

        setFavorites(favorites);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRemoveFavorite = (videoId) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.videoId !== videoId,
    );

    setFavorites(updatedFavorites);
    setIsLoading(true);

    updateUser(currentUser.id, {
      ...currentUser,
      favorites: updatedFavorites,
    })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((err) => {
        console.error("Error al eliminar favorito:", err);

        setFavorites(favorites);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Header isStudentPage={true} />

      <main className="students-page">
        <section className="students-page__welcome">
          <p className="students-page__eyebrow">
            Bienvenido, {currentUser?.name}
          </p>

          <h1 className="students-page__title">{courseTitle}</h1>

          <p className="students-page__description">
            Continúa aprendiendo y practica con el material de tu curso.
          </p>
        </section>

        <section className="students-page__module">
          <p className="students-page__module-number">Módulo 1</p>

          <h2 className="students-page__module-title">
            Introducción al {instrument}
          </h2>

          <div className="students-page__topics">
            <p>✓ Conociendo el instrumento</p>
            <p>✓ Posición correcta</p>
            <p>✓ Notas musicales</p>
            <p>✓ Primeros ejercicios</p>
          </div>
        </section>

        <section className="students-page__music">
          <h2 className="students-page__section-title">
            🎵 Música para practicar
          </h2>

          <p className="students-page__section-description">
            Busca canciones o tutoriales para complementar lo aprendido en tu
            curso.
          </p>

          <form className="students-page__search" onSubmit={handleSearch}>
            <input
              type="search"
              className="students-page__search-input"
              placeholder={`Busca ${instrument}, canciones o tutoriales...`}
              value={search}
              onChange={handleSearchChange}
            />

            <button
              type="submit"
              className="students-page__search-button"
              disabled={isLoading}
            >
              {isLoading ? "Buscando..." : "Buscar"}
            </button>
          </form>

          {error && <p className="students-page__error">{error}</p>}

          <div className="students-page__videos">
            {videos.map((video) => (
              <article className="video-card" key={video.id.videoId}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-card__link"
                >
                  <img
                    className="video-card__image"
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                  />
                </a>

                <div className="video-card__content">
                  <h3 className="video-card__title">{video.snippet.title}</h3>

                  <p className="video-card__channel">
                    {video.snippet.channelTitle}
                  </p>

                  <button
                    type="button"
                    className={`video-card__save ${
                      favorites.some(
                        (favorite) => favorite.videoId === video.id.videoId,
                      )
                        ? "video-card__save_active"
                        : ""
                    }`}
                    onClick={() => handleFavorite(video)}
                  >
                    {favorites.some(
                      (favorite) => favorite.videoId === video.id.videoId,
                    )
                      ? "♥ Me gusta"
                      : "♡ Me gusta"}
                  </button>
                </div>
              </article>
            ))}
          </div>
          <section className="students-page__favorites">
            <h2 className="students-page__section-title">❤️ Mis canciones</h2>

            <p className="students-page__section-description">
              Aquí encontrarás las canciones y tutoriales que has guardado para
              practicar.
            </p>

            {favorites.length === 0 ? (
              <p className="students-page__empty">
                Todavía no tienes canciones guardadas. Busca una canción o
                tutorial y pulsa "♡ Me gusta" para agregarlo aquí.
              </p>
            ) : (
              <div className="students-page__videos">
                {favorites.map((favorite) => (
                  <article className="video-card" key={favorite.videoId}>
                    <a
                      href={`https://www.youtube.com/watch?v=${favorite.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="video-card__link"
                    >
                      <img
                        className="video-card__image"
                        src={favorite.thumbnail}
                        alt={favorite.title}
                      />
                    </a>

                    <div className="video-card__content">
                      <h3 className="video-card__title">{favorite.title}</h3>

                      <p className="video-card__channel">
                        {favorite.channelTitle}
                      </p>

                      <button
                        type="button"
                        className="video-card__save video-card__save_active"
                        onClick={() => handleRemoveFavorite(favorite.videoId)}
                      >
                        ♥ Quitar de mis canciones
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </section>
      </main>
    </>
  );
}
