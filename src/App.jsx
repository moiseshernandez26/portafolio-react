import './App.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Portafolio de Desarrollo Web</h1>
        <nav>
          <ul>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#redes-sociales">Redes Sociales</a>
            </li>
            <li>
              <a href="#sobre-mi">Sobre Mí</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="proyectos">
        <h2>Proyectos Destacados</h2>
        <div className="project-container">
          <div className="project-card">
            <img src="calculadora.png" alt="Calculadora" />
            <h3>Calculadora</h3>
            <p>Una calculadora interactiva para realizar operaciones básicas.</p>
          </div>
          <div className="project-card">
            <img src="clima.png" alt="Aplicación del Clima" />
            <h3>Aplicación del Clima</h3>
            <p>Una aplicación que muestra el pronóstico del clima en tiempo real.</p>
          </div>
          {/* Agrega más proyectos aquí */}
        </div>
      </section>

      <section id="redes-sociales">
        <h2>Redes Sociales</h2>
        <div className="social-links">
          <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {/* Agrega más enlaces a redes sociales aquí */}
        </div>
      </section>

      <section id="sobre-mi">
        <h2>Sobre Mí</h2>
        <div className="bio">
          <img src="avatar.png" alt="Foto de Perfil" />
          <p>Soy un apasionado desarrollador web con experiencia en React, JavaScript y HTML/CSS. Me encanta crear aplicaciones web interactivas y funcionales. Estoy constantemente aprendiendo y mejorando mis habilidades para ofrecer soluciones de calidad a mis clientes.</p>
        </div>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="5"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>

      <footer>
        <p>© 2023 Nombre del Moises Hernandez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
