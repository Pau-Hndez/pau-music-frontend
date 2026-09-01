import Testimonials from "../Testimonials/Testimonials";

import ProfileImage from "../../../assets/images/pau_profile_picture.jpeg";
import pianoImage from "../../../assets/images/piano.jpg";
import guitarraImage from "../../../assets/images/guitarra.jpg";

export default function Home() {
  return (
    <div className="home">
      <section className="home__about-me" id="sobre-mi">
        <div className="home__about-me-content">
          <h2 className="home__about-me-subtitle">Hola, soy Pau</h2>

          <h1 className="home__about-me-title">
            Músico profesional y docente apasionada
          </h1>

          <p className="home__about-me-description">
            Soy músico profesional graduada de la Universidad INCCA de Colombia
            en el año 2019. Amo la música desde pequeña por lo que llevo más de
            15 años tocando piano, guitarra, bajo, canto, entre otros. En la
            Universidad gané la beca MACMEX, que me permitió estudiar un
            semestre en la Universidad de Guadalajara en México. Soy una persona
            muy dinámica que ama aprender cosas nuevas, esto lo verás reflejado
            en mis clases ya que estoy abierta a cualquier estilo de música que
            desees aprender. Mis géneros favoritos para tocar son rock, pop,
            salsa, clásica, jazz y música colombiana.
          </p>
        </div>

        <img
          className="home__about-me-image"
          src={ProfileImage}
          alt="Pau Hernández, docente de música"
        />
      </section>
      <section className="home__courses" id="cursos">
        <h1 className="home__courses-title">Nuestros cursos</h1>

        <div className="home__courses-list">
          <div className="home__course-piano">
            <img
              className="home__course-image"
              src={pianoImage}
              alt="Clases de piano"
            />

            <div className="home__course-content">
              <h2 className="home__course-title">Piano</h2>

              <p className="home__course-description">
                Descubre el poder de las 88 teclas. Clases personalizadas para
                todos los niveles, desde principiantes hasta avanzados. Aprende
                teoría musical, técnica y expresión artística mientras
                desarrollas tu propio estilo.
              </p>
            </div>
          </div>

          <div className="home__course-guitar">
            <img
              className="home__course-image"
              src={guitarraImage}
              alt="Clases de guitarra"
            />

            <div className="home__course-content">
              <h2 className="home__course-title">Guitarra</h2>

              <p className="home__course-description">
                Explora tu creatividad y exprésate a través de la guitarra.
                Clases adaptadas a tu nivel y estilo musical. Aprende acordes,
                escalas, improvisación y técnicas para dominar este instrumento.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
