import { DemoPage, Example } from "../demo/Example";

export function GridPage() {
  return (
    <DemoPage
      title="Demonstração de Layout Grid"
      description="container limita e centraliza a página. grid-2, grid-3 e grid-4 definem o número de colunas. Abaixo de 768px todas viram uma coluna."
    >
      <Example
        title="1. Container principal"
        description="Esta página já está dentro de container no app. A classe limita a largura em 1200px e centraliza."
        code={`<main class="container">
  Conteúdo centralizado de até 1200px.
</main>`}
      >
        <div className="dashed-box">Conteúdo centralizado dentro do container de até 1200px.</div>
      </Example>

      <Example
        title="2. Grid de 2 colunas"
        description="Dois blocos lado a lado, como resumo e pagamento."
        code={`<div class="grid-2">
  <article>Resumo da viagem</article>
  <article>Pagamento</article>
</div>`}
      >
        <span className="grid-label">GRID-2</span>
        <div className="grid-2">
          <article className="layout-card">
            <h3>Resumo da viagem</h3>
            <p>Destino: Rio de Janeiro<br />Período: 10 a 15 de dezembro<br />Passageiros: 2 pessoas</p>
            <strong className="layout-value">R$ 2.500</strong>
          </article>
          <article className="layout-card">
            <h3>Pagamento</h3>
            <p>Forma de pagamento: Cartão de crédito<br />Parcelamento: 5 vezes</p>
            <strong className="layout-value">R$ 500/mês</strong>
          </article>
        </div>
      </Example>

      <Example
        title="3. Grid de 3 colunas"
        description="Indicadores e widgets."
        code={`<div class="grid-3">
  <article>Viagens realizadas</article>
  <article>Reservas pendentes</article>
  <article>Faturamento</article>
</div>`}
      >
        <span className="grid-label">GRID-3</span>
        <div className="grid-3">
          <article className="layout-card widget">
            <h3>Viagens realizadas</h3>
            <strong>128</strong>
            <span>Total de viagens concluídas</span>
          </article>
          <article className="layout-card widget">
            <h3>Reservas pendentes</h3>
            <strong>24</strong>
            <span>Aguardando confirmação</span>
          </article>
          <article className="layout-card widget">
            <h3>Faturamento</h3>
            <strong>R$ 45 mil</strong>
            <span>Faturamento do período</span>
          </article>
        </div>
      </Example>

      <Example
        title="4. Grid de 4 colunas"
        description="Destinos e cards da página inicial."
        code={`<div class="grid-4">
  <article>Rio de Janeiro</article>
  <article>Paris</article>
  <article>Nova York</article>
  <article>Santorini</article>
</div>`}
      >
        <span className="grid-label">GRID-4</span>
        <div className="grid-4">
          <article className="layout-card">
            <img src="https://images.unsplash.com/photo-1544986581-efac024faf62?w=500" alt="Rio de Janeiro" />
            <h3>Rio de Janeiro</h3>
            <p>Brasil · América do Sul</p>
          </article>
          <article className="layout-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500" alt="Paris" />
            <h3>Paris</h3>
            <p>França · Europa</p>
          </article>
          <article className="layout-card">
            <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500" alt="Nova York" />
            <h3>Nova York</h3>
            <p>Estados Unidos</p>
          </article>
          <article className="layout-card">
            <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500" alt="Santorini" />
            <h3>Santorini</h3>
            <p>Grécia · Europa</p>
          </article>
        </div>
      </Example>

      <Example
        title="5. Combinação de diferentes grids"
        description="grid-3 dentro de um item de grid-2."
        code={`<div class="grid-2">
  <article>
    <div class="grid-3">...</div>
  </article>
  <article>Informações da viagem</article>
</div>`}
      >
        <span className="grid-label">GRID-2 + GRID-3</span>
        <div className="grid-2">
          <article className="layout-card">
            <h3>Resumo financeiro</h3>
            <div className="grid-3">
              <div>
                <p>Receita</p>
                <strong>R$ 20 mil</strong>
              </div>
              <div>
                <p>Despesas</p>
                <strong>R$ 8 mil</strong>
              </div>
              <div>
                <p>Lucro</p>
                <strong>R$ 12 mil</strong>
              </div>
            </div>
          </article>
          <article className="layout-card">
            <h3>Informações da viagem</h3>
            <p>Destino: Paris<br />Data: 15/12/2026<br />Duração: 7 dias<br />Status: Confirmada</p>
          </article>
        </div>
      </Example>

      <Example
        title="6. Comportamento responsivo"
        description="Reduza a janela. Abaixo de 768px, grid-2, grid-3 e grid-4 passam para uma coluna."
        code={`<div class="grid-4">
  <article>Coluna 1</article>
  <article>Coluna 2</article>
  <article>Coluna 3</article>
  <article>Coluna 4</article>
</div>`}
      >
        <span className="grid-label">RESPONSIVE GRID</span>
        <div className="grid-4">
          <article className="layout-card"><h3>Coluna 1</h3><p>Primeiro elemento da grade.</p></article>
          <article className="layout-card"><h3>Coluna 2</h3><p>Segundo elemento da grade.</p></article>
          <article className="layout-card"><h3>Coluna 3</h3><p>Terceiro elemento da grade.</p></article>
          <article className="layout-card"><h3>Coluna 4</h3><p>Quarto elemento da grade.</p></article>
        </div>
      </Example>
    </DemoPage>
  );
}
