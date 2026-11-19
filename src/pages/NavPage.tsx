import { NavMenu } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

export function NavPage() {
  return (
    <DemoPage
      title="Componente Navigation"
      description="Menu de links. O título do grupo usa nav__section-title, a lista usa nav__list e cada item usa nav__link. A página atual usa nav__link--active."
    >
      <Example
        title="1. Menu lateral completo"
        description="Grupos, títulos, ícones e a página selecionada."
        code={`<nav class="nav">
  <div class="nav__section">
    <h3 class="nav__section-title">Geral</h3>
    <ul class="nav__list">
      <li><a class="nav__link nav__link--active" href="#dashboard">Dashboard</a></li>
      <li><a class="nav__link" href="#reservas">Minhas reservas</a></li>
    </ul>
  </div>
</nav>`}
      >
        <div className="nav-stage">
          <aside className="nav-sidebar">
            <NavMenu
              label="Menu principal"
              sections={[
                {
                  title: "Geral",
                  items: [
                    { href: "#dashboard", label: "Dashboard", icon: "▦", active: true },
                    { href: "#reservas", label: "Minhas reservas", icon: "✈" },
                    { href: "#destinos", label: "Destinos", icon: "◎" },
                  ],
                },
                {
                  title: "Administração",
                  items: [
                    { href: "#viagens", label: "Gerenciar viagens", icon: "▤" },
                    { href: "#clientes", label: "Clientes", icon: "♙" },
                    { href: "#relatorios", label: "Relatórios", icon: "▥" },
                  ],
                },
              ]}
            />
          </aside>
        </div>
      </Example>

      <Example
        title="2. Separação por grupos"
        description="Cada bloco fica em nav__section, com o próprio nav__section-title."
        code={`<div class="nav__section">
  <h3 class="nav__section-title">Explorar</h3>
  <ul class="nav__list">
    <li><a class="nav__link" href="#praias">Praias</a></li>
  </ul>
</div>`}
      >
        <div className="nav-stage">
          <aside className="nav-sidebar">
            <NavMenu
              label="Navegação por categorias"
              sections={[
                {
                  title: "Explorar",
                  items: [
                    { href: "#praias", label: "Praias", icon: "🏖" },
                    { href: "#montanhas", label: "Montanhas", icon: "🏔" },
                    { href: "#cidades", label: "Cidades", icon: "🏙" },
                  ],
                },
                {
                  title: "Minha conta",
                  items: [
                    { href: "#perfil", label: "Meu perfil", icon: "♙" },
                    { href: "#favoritos", label: "Favoritos", icon: "♡" },
                  ],
                },
              ]}
            />
          </aside>
        </div>
      </Example>

      <Example
        title="3. Estado ativo"
        description="O link da página atual recebe nav__link--active."
        code={`<a class="nav__link" href="#dashboard">Dashboard</a>
<a class="nav__link nav__link--active" href="#pacotes">Pacotes de viagem</a>`}
      >
        <div className="nav-stage">
          <aside className="nav-sidebar">
            <NavMenu
              label="Navegação de exemplo"
              sections={[
                {
                  title: "Gerenciamento",
                  items: [
                    { href: "#dashboard-exemplo", label: "Dashboard" },
                    { href: "#pacotes-exemplo", label: "Pacotes de viagem", active: true },
                    { href: "#usuarios-exemplo", label: "Usuários" },
                    { href: "#configuracoes-exemplo", label: "Configurações" },
                  ],
                },
              ]}
            />
          </aside>
        </div>
      </Example>

      <Example
        title="4. Estado hover"
        description="O efeito ao passar o mouse vem de nav__link:hover, sem classe extra no HTML."
        code={`<a class="nav__link" href="#inicio">Início</a>

/* no CSS */
.nav__link:hover {
  background-color: #1e293b;
  color: #ffffff;
}`}
      >
        <div className="nav-stage">
          <aside className="nav-sidebar">
            <NavMenu
              label="Menu interativo"
              sections={[
                {
                  title: "Navegação",
                  items: [
                    { href: "#inicio-hover", label: "Início" },
                    { href: "#buscar-hover", label: "Buscar viagens" },
                    { href: "#ofertas-hover", label: "Ofertas" },
                  ],
                },
              ]}
            />
            <p className="hint" style={{ marginTop: 16, color: "#94a3b8" }}>
              Passe o cursor sobre os links.
            </p>
          </aside>
        </div>
      </Example>

      <Example
        title="5. Navegação horizontal"
        description="Os links continuam com nav__link. A fileira horizontal é o container nav-horizontal, que deixa a lista em linha."
        code={`<div class="nav-horizontal">
  <nav class="nav">
    <ul class="nav__list">
      <li><a class="nav__link nav__link--active" href="#home">Início</a></li>
      <li><a class="nav__link" href="#destinos">Destinos</a></li>
    </ul>
  </nav>
</div>`}
      >
        <div className="nav-horizontal">
          <NavMenu
            label="Navegação horizontal"
            sections={[
              {
                items: [
                  { href: "#home-horizontal", label: "Início", active: true },
                  { href: "#destinos-horizontal", label: "Destinos" },
                  { href: "#pacotes-horizontal", label: "Pacotes" },
                  { href: "#contato-horizontal", label: "Contato" },
                ],
              },
            ]}
          />
        </div>
      </Example>
    </DemoPage>
  );
}
