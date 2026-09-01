export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-icon">🎹</span>
            <span className="logo-text">
              Pau <span>music</span>
            </span>
          </div>
          <p className="footer-description">
            Aprende, disfruta y desarrolla tu talento musical con clases
            personalizadas de piano y guitarra.
          </p>
          <div className="footer-socials">
            <a href="#instagram" aria-label="Instagram">
              Instagram
            </a>
            <a href="#youtube" aria-label="YouTube">
              YouTube
            </a>
            <a href="#whatsapp" aria-label="WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Contacto</h3>
          <ul className="footer-contact">
            <li>
              <span className="contact-icon">📍</span>
              <span>Bogotá, Colombia</span>
            </li>
            <li>
              <span className="contact-icon">✉️</span>
              <a href="mailto:contacto@paumusic.com">contacto@paumusic.com</a>
            </li>
            <li>
              <span className="contact-icon">📱</span>
              <a href="tel:+573000000000">+57 300 000 0000</a>
            </li>
          </ul>
          <a href="#agenda" className="btn-agenda-footer">
            ¡AGENDA TU CLASE! 🎵
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Pau Music. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
