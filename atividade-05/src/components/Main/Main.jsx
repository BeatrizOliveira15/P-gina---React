import './Main.css'

function Main(){
    return (
        <>
        <main role="main">
      <section class="hero-banner" aria-labelledby="hero-title">
        <div class="container">
          <div class="hero-content">
            <h2 id="hero-title">Bem-vindo ao Futuro do Desenvolvimento Web</h2>
            <p>
              Criando experiêcias digitais excepcionais com tecnologia moderna e design responsivo.
            </p>
          </div>
        </div>
      </section>
      <section class="quote-section" aria-labelledby="quote-heading">
        <div class="container">
          <div class="quote-content">
            "O sucesso é a soma de pequenos esforços repetidos dias após dia."
            <div class="quote-author"><strong> - Robert Collier</strong></div>
          </div>
        </div>
      </section>
      <section class="cards-section" aria-labelledby="cards-title">
        <div class="container">
            <div class="cards-grid">
              <article class="card">
                <img src="https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg" alt="Desenvolvimento Frontend" height={200} class="card-image" loading="lazy"/>
                <h3>Desenvolvimento Frontend</h3>
                <p>
                  Criação de interfaces modernas e resposivas utilizando as mais recentes tecnologias web.
                </p>
              </article>
              <article class="card">
                <img src="https://images.pexels.com/photos/562211/pexels-photo-562211.jpeg" alt="Design Responsivo" height={200} class="card-image" loading="lazy"/>
                <h3>Design Responsivo</h3>
                <p>
                  Layouts que se adaptam perfeitamente a qualquer dispositivo, desde smartphones até desktops.
                </p>
              </article>
              <article class="card">
                <img src="https://images.pexels.com/photos/2611465/pexels-photo-2611465.jpeg" alt="Performance e SEO" height={200} class="card-image" loading="lazy"/>
                <h3>Performance e SEO</h3>
                <p>
                  Otimização avançada para garantir carregamento rápido e melhor posicionamento nos buscadores.
                </p>
              </article>
              <article class="card">
                <img src="https://images.pexels.com/photos/1058398/pexels-photo-1058398.jpeg" alt="Acessibilidade Web" height={200} class="card-image" loading="lazy"/>
                <h3>Acessibilidade Web</h3>
                <p>
                  Desenvolvimento inclusivo seguindo as diretrizes WCAG para atender todos os usuários.
                </p>
              </article>
            </div>
            <div class="featured-card">
                <h2>Transforme Sua Presença Digital</h2>
                <p>
                  Junte-se a centenas de empresas que já transformaram seus negócios com nossas soluções web inovadoras e estratégias digitais eficazes.
                </p>
              </div>
          </div>
      </section>
    </main>
        </>
    )
}

export default Main;
