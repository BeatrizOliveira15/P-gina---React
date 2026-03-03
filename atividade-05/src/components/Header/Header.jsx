import './Header.css'

function Header(){
    return (
        <>
        <header class="site-header" role="banner">
      <div class="container">
        <div class="header-content">
          <h1 class="site-title">Minha Página Exemplo</h1>
          <nav class="main-nav" role="navigation" aria-label="Navegação principal">
            <ul>
              <li>
                <a href="#" aria-current="page" class="active">
                  Início
                </a>
              </li>
              <li>
                <a href="#" aria-current="page" class="active">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" aria-current="page" class="active">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
        </>
    )
}

export default Header;
