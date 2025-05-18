import { useState } from 'react'
import './App.css'
import logoOro from './assets/logo_oro.jpg'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="App">
      <header>
        <div className="container header-container">
          <div className="logo">
            <img src={logoOro} alt="Logo O.R.O" />
            <h1>SEGURIDAD PRIVADA ASESORÍAS Y CAPACITACIÓN O.R.O</h1>
          </div>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            ☰
          </button>
          <nav>
            <ul className={mobileMenuOpen ? 'show' : ''}>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Sobre Nosotros</a></li>
              <li><a href="#equipo">Equipo</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="container">
          <h2>Soluciones de Seguridad Profesionales</h2>
          <p>Ofrecemos servicios de vigilancia privada, asesorías y capacitación de la más alta calidad para proteger lo que más valora.</p>
          <a href="#contacto" className="btn">Contáctenos</a>
        </div>
      </section>

      <section id="servicios" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros Servicios</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <h3>Vigilancia Privada</h3>
                <p>Ofrecemos servicios de vigilancia profesional para empresas, residencias y eventos. Nuestro personal está altamente capacitado para garantizar la seguridad de sus instalaciones y personal.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-content">
                <h3>Capacitación</h3>
                <p>Programas de capacitación especializados en seguridad para formar a su personal con las mejores prácticas y técnicas del sector. Cursos adaptados a las necesidades específicas de cada cliente.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-content">
                <h3>Asesorías</h3>
                <p>Consultoría experta en seguridad para evaluar riesgos, implementar protocolos y optimizar sus sistemas de protección. Soluciones personalizadas para cada tipo de negocio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="about">
        <div className="container">
          <div className="section-title">
            <h2>Sobre Nosotros</h2>
          </div>
          <div className="about-content">
            <div>
              <p>En SEGURIDAD PRIVADA ASESORÍAS Y CAPACITACIÓN O.R.O nos dedicamos a proporcionar soluciones integrales de seguridad que se adaptan a las necesidades específicas de cada cliente.</p>
              <p>Con años de experiencia en el sector, nuestro equipo de profesionales altamente capacitados trabaja con el compromiso de ofrecer servicios de la más alta calidad, garantizando la tranquilidad y protección que usted y su organización merecen.</p>
              <p>Nuestra misión es convertirnos en su aliado estratégico en materia de seguridad, ofreciendo soluciones innovadoras y efectivas que le permitan enfocarse en lo que realmente importa: el crecimiento de su negocio.</p>
            </div>
            <div className="about-image">
              <img src={logoOro} alt="Sobre O.R.O" />
            </div>
          </div>
        </div>
      </section>

      <section id="equipo" className="team">
        <div className="container">
          <div className="section-title">
            <h2>Nuestro Equipo</h2>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-info">
                <h3>Director General</h3>
                <p>Liderazgo y Estrategia</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-info">
                <h3>Jefe de Operaciones</h3>
                <p>Coordinación de Servicios</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-info">
                <h3>Director de Capacitación</h3>
                <p>Formación Especializada</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-info">
                <h3>Consultor Senior</h3>
                <p>Asesoría Estratégica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonios" className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Testimonios</h2>
          </div>
          <div className="testimonial-slider">
            <div className="testimonial">
              <p>"El servicio de vigilancia proporcionado por O.R.O ha superado todas nuestras expectativas. Su profesionalismo y atención al detalle han mejorado significativamente la seguridad de nuestras instalaciones."</p>
              <div className="testimonial-author">Empresa de Manufactura</div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="gallery">
        <div className="container">
          <div className="section-title">
            <h2>Galería</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={logoOro} alt="Imagen de galería 1" />
            </div>
            <div className="gallery-item">
              <img src={logoOro} alt="Imagen de galería 2" />
            </div>
            <div className="gallery-item">
              <img src={logoOro} alt="Imagen de galería 3" />
            </div>
            <div className="gallery-item">
              <img src={logoOro} alt="Imagen de galería 4" />
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contacto</h2>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              <div className="contact-detail">
                <i className="icon">📱</i>
                <div>
                  <h4>Teléfono</h4>
                  <p>(Teléfono pendiente)</p>
                </div>
              </div>
              <div className="contact-detail">
                <i className="icon">✉️</i>
                <div>
                  <h4>Correo Electrónico</h4>
                  <p>(Correo pendiente)</p>
                </div>
              </div>
              <div className="contact-detail">
                <i className="icon">📍</i>
                <div>
                  <h4>Dirección</h4>
                  <p>(Dirección pendiente)</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Envíenos un Mensaje</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="btn">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="blog">
        <div className="container">
          <div className="section-title">
            <h2>Blog y Noticias</h2>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-content">
                <span className="blog-date">Mayo 2025</span>
                <h3>Nuevas Tendencias en Seguridad Privada</h3>
                <p>Descubra las últimas innovaciones y tendencias en el sector de la seguridad privada y cómo pueden beneficiar a su organización.</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-content">
                <span className="blog-date">Abril 2025</span>
                <h3>La Importancia de la Capacitación en Seguridad</h3>
                <p>Un personal bien capacitado es fundamental para garantizar la efectividad de cualquier sistema de seguridad. Conozca por qué.</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-content">
                <span className="blog-date">Marzo 2025</span>
                <h3>Cómo Evaluar los Riesgos de Seguridad en su Empresa</h3>
                <p>Guía práctica para identificar vulnerabilidades y establecer protocolos efectivos de seguridad en su organización.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-container">
            <div className="footer-col">
              <h3>SEGURIDAD PRIVADA O.R.O</h3>
              <p>Soluciones integrales de seguridad, asesoría y capacitación para proteger lo que más valora.</p>
            </div>
            <div className="footer-col">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#nosotros">Sobre Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Servicios</h3>
              <ul>
                <li><a href="#servicios">Vigilancia Privada</a></li>
                <li><a href="#servicios">Capacitación</a></li>
                <li><a href="#servicios">Asesorías</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Síguenos</h3>
              <div className="social-links">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Twitter">TW</a>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="LinkedIn">IN</a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} SEGURIDAD PRIVADA ASESORÍAS Y CAPACITACIÓN O.R.O. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
