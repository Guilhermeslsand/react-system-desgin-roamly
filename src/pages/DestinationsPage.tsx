import { DestinationsSection } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

function Trip({ src, alt, title, place, price }: { src: string; alt: string; title: string; place: string; price?: string }) {
  return (
    <article className="trip-card">
      <img src={src} alt={alt} />
      <div className="trip-card__body">
        <h3>{title}</h3>
        <p>{place}</p>
        {price ? <span className="trip-card__price">{price}</span> : null}
      </div>
    </article>
  );
}

export function DestinationsPage() {
  return (
    <DemoPage
      title="Demonstração de Destinations"
      description="A seção é destinations. O cabeçalho é destinations__header, o título destinations__title, o texto destinations__subtitle, o link destinations__link e a grade destinations__grid."
    >
      <Example
        title="1. Seção de destinos padrão"
        description="Cabeçalho completo e quatro cards na grade."
        code={`<section class="destinations">
  <header class="destinations__header">
    <div>
      <h2 class="destinations__title">Destinos populares</h2>
      <p class="destinations__subtitle">Explore os lugares mais procurados.</p>
    </div>
    <a class="destinations__link" href="#todos">Ver todos os destinos →</a>
  </header>
  <div class="destinations__grid">...</div>
</section>`}
      >
        <DestinationsSection
          title="Destinos populares"
          subtitle="Explore os lugares mais procurados pelos viajantes."
          link={{ href: "#todos-destinos", label: "Ver todos os destinos →" }}
        >
          <Trip src="https://images.unsplash.com/photo-1544986581-efac024faf62?w=600" alt="Vista do Rio de Janeiro" title="Rio de Janeiro" place="Brasil · América do Sul" price="A partir de R$ 899" />
          <Trip src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600" alt="Torre Eiffel em Paris" title="Paris" place="França · Europa" price="A partir de R$ 3.200" />
          <Trip src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600" alt="Nova York" title="Nova York" place="Estados Unidos · América do Norte" price="A partir de R$ 2.800" />
          <Trip src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600" alt="Santorini" title="Santorini" place="Grécia · Europa" price="A partir de R$ 4.500" />
        </DestinationsSection>
      </Example>

      <Example
        title="2. Cabeçalho da seção"
        description="Título e descrição, sem o link destinations__link."
        code={`<header class="destinations__header">
  <div>
    <h2 class="destinations__title">Explore novos lugares</h2>
    <p class="destinations__subtitle">Encontre seu próximo destino de viagem.</p>
  </div>
</header>`}
      >
        <DestinationsSection title="Explore novos lugares" subtitle="Encontre seu próximo destino de viagem." />
      </Example>

      <Example
        title="3. Grade com diferentes destinos"
        description="A grade destinations__grid aceita a quantidade de cards disponível."
        code={`<div class="destinations__grid">
  <!-- um card por destino -->
</div>
<a class="destinations__link" href="#mais">Ver mais →</a>`}
      >
        <DestinationsSection
          title="Destinos nacionais"
          subtitle="Conheça lugares incríveis pelo Brasil."
          link={{ href: "#destinos-nacionais", label: "Ver mais →" }}
        >
          <Trip src="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600" alt="Salvador" title="Salvador" place="Bahia · Brasil" />
          <Trip src="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=600" alt="Florianópolis" title="Florianópolis" place="Santa Catarina · Brasil" />
          <Trip src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600" alt="Foz do Iguaçu" title="Foz do Iguaçu" place="Paraná · Brasil" />
          <Trip src="https://images.unsplash.com/photo-1547995886-6dc09384c6e6?w=600" alt="Jericoacoara" title="Jericoacoara" place="Ceará · Brasil" />
        </DestinationsSection>
      </Example>

      <Example
        title="4. Grade sem destinos"
        description="A grade permanece. O aviso de vazio fica dentro de destinations__grid."
        code={`<section class="destinations">
  <header class="destinations__header">...</header>
  <div class="destinations__grid">
    Nenhum destino encontrado.
  </div>
</section>`}
      >
        <DestinationsSection title="Destinos encontrados" subtitle="Resultados da sua pesquisa.">
          <div className="empty-state">Nenhum destino encontrado.</div>
        </DestinationsSection>
      </Example>
    </DemoPage>
  );
}
