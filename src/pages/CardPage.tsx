import { Card } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

export function CardPage() {
  return (
    <DemoPage
      title="Demonstração de Cards"
      description="A caixa é card. O clique com elevação é card--interactive. Destino usa card--destination. Conteúdo, imagem, selo, título e preço têm as classes card__*."
    >
      <Example
        title="1. Card padrão"
        description="Sem modificador. O texto fica em card__content."
        code={`<article class="card">
  <div class="card__content">
    <h3 class="card__title">Card básico</h3>
    <p class="card__label">Estrutura visual padrão, sem modificadores.</p>
  </div>
</article>`}
      >
        <div className="card-grid">
          <Card>
            <div className="card__content">
              <h3 className="card__title">Card básico</h3>
              <p className="card__label">Estrutura visual padrão, sem modificadores.</p>
            </div>
          </Card>
        </div>
      </Example>

      <Example
        title="2. Card interativo"
        description="card--interactive sobe o card e aumenta a sombra no hover."
        code={`<article class="card card--interactive">
  <div class="card__content">
    <h3 class="card__title">Card clicável</h3>
  </div>
</article>`}
      >
        <div className="card-grid">
          <Card interactive>
            <div className="card__content">
              <h3 className="card__title">Card clicável</h3>
              <p className="card__label">Passe o mouse para visualizar o efeito hover.</p>
            </div>
          </Card>
        </div>
      </Example>

      <Example
        title="3. Cards de destinos"
        description="Imagem 16:9 com card--destination, selo com card__badge e preço com card__price-value."
        code={`<article class="card card--destination card--interactive">
  <div class="card__image-wrapper">
    <span class="card__badge">Mais vendido</span>
    <img class="card__image" alt="Costa italiana">
  </div>
  <div class="card__content">
    <h3 class="card__title">Cinque Terre</h3>
    <div class="card__footer">
      <span class="card__label">Itália</span>
      <strong class="card__price-value">R$ 2.500</strong>
    </div>
  </div>
</article>`}
      >
        <div className="card-grid">
          <Card destination interactive>
            <div className="card__image-wrapper">
              <span className="card__badge">Mais vendido</span>
              <img className="card__image" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600" alt="Costa italiana" />
            </div>
            <div className="card__content">
              <h3 className="card__title">Cinque Terre</h3>
              <div className="card__footer">
                <span className="card__label">Itália</span>
                <strong className="card__price-value">R$ 2.500</strong>
              </div>
            </div>
          </Card>
          <Card destination interactive>
            <div className="card__image-wrapper">
              <span className="card__badge">Oferta especial</span>
              <img className="card__image" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600" alt="Paisagem de montanhas" />
            </div>
            <div className="card__content">
              <h3 className="card__title">Montanhas</h3>
              <div className="card__footer">
                <span className="card__label">Suíça</span>
                <strong className="card__price-value">R$ 3.800</strong>
              </div>
            </div>
          </Card>
        </div>
      </Example>

      <Example
        title="4. Card de hotel"
        description="Imagem, selo e cabeçalho com card__header. O hover continua em card--interactive."
        code={`<article class="card card--interactive">
  <div class="card__image-wrapper">
    <img class="card__image" alt="Hotel com piscina">
    <span class="card__badge">Recomendado</span>
  </div>
  <div class="card__content">
    <div class="card__header">
      <h3 class="card__title">Hotel Paradise</h3>
    </div>
    <div class="card__footer">
      <span class="card__label">Por diária</span>
      <strong class="card__price-value">R$ 450</strong>
    </div>
  </div>
</article>`}
      >
        <div className="card-grid">
          <Card interactive>
            <div className="card__image-wrapper">
              <img className="card__image" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" alt="Hotel com piscina" />
              <span className="card__badge">Recomendado</span>
            </div>
            <div className="card__content">
              <div className="card__header">
                <h3 className="card__title">Hotel Paradise</h3>
                <span className="card__rating">★ 4.9</span>
              </div>
              <p className="card__label">Rio de Janeiro, Brasil</p>
              <hr className="card__divider" />
              <div className="card__footer">
                <span className="card__label">Por diária</span>
                <strong className="card__price-value">R$ 450</strong>
              </div>
            </div>
          </Card>
        </div>
      </Example>

      <Example
        title="5. Card de voo"
        description="Sem imagem. O título e o selo ficam no card__header."
        code={`<article class="card card--interactive">
  <div class="card__content">
    <div class="card__header">
      <h3 class="card__title">São Paulo → Salvador</h3>
      <span class="card__badge">Direto</span>
    </div>
    <div class="card__footer">
      <span class="card__label">A partir de</span>
      <strong class="card__price-value">R$ 620</strong>
    </div>
  </div>
</article>`}
      >
        <div className="card-grid">
          <Card interactive>
            <div className="card__content">
              <div className="card__header">
                <h3 className="card__title">São Paulo → Salvador</h3>
                <span className="card__badge">Direto</span>
              </div>
              <div className="card__flight-info">
                <div>
                  <strong>08:30</strong>
                  <p className="card__label">GRU</p>
                </div>
                <span className="card__label">2h 15min →</span>
                <div>
                  <strong>10:45</strong>
                  <p className="card__label">SSA</p>
                </div>
              </div>
              <hr className="card__divider" />
              <div className="card__footer">
                <span className="card__label">A partir de</span>
                <strong className="card__price-value">R$ 620</strong>
              </div>
            </div>
          </Card>
        </div>
      </Example>

      <Example
        title="6. Combinando modificadores"
        description="card--destination e card--interactive juntos."
        code={`<article class="card card--destination card--interactive">
  <div class="card__image-wrapper">
    <img class="card__image" alt="Ilha grega">
    <span class="card__badge">Destaque</span>
  </div>
</article>`}
      >
        <div className="card-grid">
          <Card destination interactive>
            <div className="card__image-wrapper">
              <img className="card__image" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600" alt="Ilha grega" />
              <span className="card__badge">Destaque</span>
            </div>
            <div className="card__content">
              <h3 className="card__title">Ilhas Gregas</h3>
              <div className="card__footer">
                <span className="card__label">Grécia</span>
                <strong className="card__price-value">R$ 4.200</strong>
              </div>
            </div>
          </Card>
        </div>
      </Example>
    </DemoPage>
  );
}
