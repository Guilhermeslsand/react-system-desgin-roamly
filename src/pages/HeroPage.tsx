import { Hero, HomeCard } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

export function HeroPage() {
  return (
    <DemoPage
      title="Home Card e Hero"
      description="O container da home é home-card. O destaque é hero. A etiqueta superior é hero__badge ou hero__tag, o título é hero__title, o resumo é hero__subtitle e o texto longo é hero__text."
    >
      <Example
        title="1. Home Card com Hero"
        description="home-card agrupa o hero e o conteúdo seguinte."
        code={`<div class="home-card">
  <section class="hero">
    <span class="hero__badge">Sua próxima aventura começa aqui</span>
    <span class="hero__tag">Plataforma de viagens</span>
    <h2 class="hero__title">Explore o mundo com a gente</h2>
    <p class="hero__subtitle">Encontre destinos incríveis.</p>
  </section>
</div>`}
      >
        <HomeCard>
          <Hero>
            <span className="hero__badge">Sua próxima aventura começa aqui</span>
            <br />
            <br />
            <span className="hero__tag">Plataforma de viagens</span>
            <h2 className="hero__title">Explore o mundo com a gente</h2>
            <p className="hero__subtitle">
              Encontre destinos incríveis e planeje sua próxima viagem com praticidade e segurança.
            </p>
          </Hero>
          <div className="hero-follow">
            <h3>Comece a planejar sua viagem</h3>
            <p>Descubra novos lugares, compare opções e encontre o destino ideal.</p>
            <div className="mini-grid">
              <article className="mini-tile">
                <div>🏖️</div>
                <h4>Praias</h4>
                <p>Relaxe em destinos paradisíacos.</p>
              </article>
              <article className="mini-tile">
                <div>🏔️</div>
                <h4>Montanhas</h4>
                <p>Explore paisagens naturais.</p>
              </article>
              <article className="mini-tile">
                <div>🏙️</div>
                <h4>Cidades</h4>
                <p>Conheça culturas e pontos turísticos.</p>
              </article>
            </div>
          </div>
        </HomeCard>
      </Example>

      <Example
        title="2. Hero isolado"
        description="A seção hero funciona sem o home-card."
        code={`<section class="hero">
  <span class="hero__tag">Descubra novos destinos</span>
  <h2 class="hero__title">Viajar nunca foi tão simples</h2>
  <p class="hero__subtitle">Planeje sua viagem e encontre ofertas.</p>
</section>`}
      >
        <Hero>
          <span className="hero__tag">Descubra novos destinos</span>
          <h2 className="hero__title">Viajar nunca foi tão simples</h2>
          <p className="hero__subtitle">Planeje sua viagem, encontre ofertas e viva experiências inesquecíveis.</p>
        </Hero>
      </Example>

      <Example
        title="3. Elementos do Hero"
        description="hero__badge no topo, hero__title e hero__text no lugar do subtítulo."
        code={`<span class="hero__badge">Oferta especial</span>
<h2 class="hero__title">Conheça o Brasil</h2>
<p class="hero__text">De praias tropicais a cidades históricas.</p>`}
      >
        <HomeCard>
          <Hero>
            <span className="hero__badge">Oferta especial</span>
            <h2 className="hero__title">Conheça o Brasil</h2>
            <p className="hero__text">
              De praias tropicais a cidades históricas, encontre o destino perfeito para sua próxima experiência.
            </p>
          </Hero>
        </HomeCard>
      </Example>

      <Example
        title="4. Hero com conteúdo complementar"
        description="Tag, badge, título, subtítulo e texto na mesma seção."
        code={`<span class="hero__tag">Planeje sua viagem</span>
<span class="hero__badge">Mais destinos, mais experiências</span>
<h2 class="hero__title">O mundo espera por você</h2>
<p class="hero__subtitle">Escolha seu próximo destino.</p>
<p class="hero__text">Consulte pacotes e encontre oportunidades.</p>`}
      >
        <HomeCard>
          <Hero>
            <span className="hero__tag">Planeje sua viagem</span>
            <br />
            <br />
            <span className="hero__badge">Mais destinos, mais experiências</span>
            <h2 className="hero__title">O mundo espera por você</h2>
            <p className="hero__subtitle">Escolha seu próximo destino e comece a organizar sua viagem.</p>
            <p className="hero__text" style={{ marginTop: 20 }}>
              Consulte pacotes, encontre oportunidades e transforme seus planos em experiências reais.
            </p>
          </Hero>
        </HomeCard>
      </Example>

      <p className="note">
        Os elementos do Hero são opcionais. Use só os que fizerem sentido para a mensagem da seção.
      </p>
    </DemoPage>
  );
}
