import { Logo } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

const image = "https://placehold.co/320x80/0d9488/ffffff?text=ViajeMais";

export function LogoPage() {
  return (
    <DemoPage
      title="Componente Logo"
      description="A marca fica dentro de logo. O símbolo usa logo__icon e a imagem usa logo__img."
    >
      <Example
        title="1. Logo com ícone e texto"
        description="Símbolo colorido ao lado do nome."
        code={`<div class="logo">
  <div class="logo__icon">V</div>
  <span>ViajeMais</span>
</div>`}
      >
        <Logo icon="V" name="ViajeMais" />
      </Example>

      <Example
        title="2. Logo com imagem"
        description="A imagem mantém a proporção com logo__img."
        code={`<div class="logo">
  <img class="logo__img" src="logo.png" alt="ViajeMais">
</div>`}
      >
        <Logo imageSrc={image} imageAlt="ViajeMais - Plataforma de viagens" />
      </Example>

      <Example
        title="3. Logo somente com ícone"
        description="Apenas logo__icon, para espaços menores."
        code={`<div class="logo">
  <div class="logo__icon">V</div>
</div>`}
      >
        <Logo icon="V" />
      </Example>

      <Example
        title="4. Comparação de formatos"
        description="As duas apresentações previstas no componente."
        code={`<div class="logo">
  <div class="logo__icon">V</div>
</div>

<div class="logo">
  <img class="logo__img" alt="ViajeMais">
</div>`}
      >
        <div className="preview-row">
          <Logo icon="V" name="ViajeMais" />
          <Logo imageSrc={image} imageAlt="ViajeMais" />
        </div>
      </Example>

      <Example
        title="5. Logo no Header"
        description="O mesmo bloco logo no cabeçalho da página."
        code={`<div class="logo">
  <div class="logo__icon">V</div>
  <span>ViajeMais</span>
</div>`}
      >
        <div className="logo-header">
          <Logo icon="V" name="ViajeMais" />
          <nav className="logo-header__nav" aria-label="Menu principal">
            <span>Destinos</span>
            <span>Pacotes</span>
            <span>Sobre nós</span>
          </nav>
        </div>
      </Example>

      <Example
        title="6. Logo na Sidebar"
        description="O bloco logo sobre fundo escuro, no topo do menu."
        code={`<div class="logo">
  <div class="logo__icon">V</div>
  <span>ViajeMais</span>
</div>`}
      >
        <aside className="logo-sidebar">
          <Logo icon="V" name="ViajeMais" />
          <div className="logo-sidebar__item logo-sidebar__item--active">Dashboard</div>
          <div className="logo-sidebar__item">Viagens</div>
          <div className="logo-sidebar__item">Clientes</div>
          <div className="logo-sidebar__item">Configurações</div>
        </aside>
      </Example>
    </DemoPage>
  );
}
