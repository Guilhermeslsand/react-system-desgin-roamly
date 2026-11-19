import { ButtonNav } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

export function ButtonNavPage() {
  return (
    <DemoPage
      title="Demonstração de Button Nav"
      description="Botões de avançar, voltar, paginação e etapas. A base é button-nav. O destaque usa button-nav--primary."
    >
      <Example
        title="1. Button Nav padrão"
        description="Estilo base para ações secundárias de navegação."
        code={`<button class="button-nav" type="button">← Anterior</button>`}
      >
        <div className="preview-row">
          <ButtonNav type="button">← Anterior</ButtonNav>
          <ButtonNav type="button">Cancelar</ButtonNav>
          <ButtonNav type="button">Voltar</ButtonNav>
        </div>
      </Example>

      <Example
        title="2. Button Nav primary"
        description="Variação de destaque para a ação principal de navegação."
        code={`<button class="button-nav button-nav--primary" type="button">Próxima →</button>`}
      >
        <div className="preview-row">
          <ButtonNav variant="primary" type="button">Próxima →</ButtonNav>
          <ButtonNav variant="primary" type="button">Continuar</ButtonNav>
          <ButtonNav variant="primary" type="button">Finalizar</ButtonNav>
        </div>
      </Example>

      <Example
        title="3. Navegação por paginação"
        description="O botão de voltar fica no padrão e o de avançar no primary."
        code={`<button class="button-nav">← Anterior</button>
<button class="button-nav button-nav--primary">Próxima →</button>`}
      >
        <div className="pagination">
          <ButtonNav type="button">← Anterior</ButtonNav>
          <span className="page-number">Página 2 de 5</span>
          <ButtonNav variant="primary" type="button">Próxima →</ButtonNav>
        </div>
      </Example>

      <Example
        title="4. Navegação entre etapas"
        description="Voltar com a classe base e avançar com o modificador primary."
        code={`<button class="button-nav">← Voltar</button>
<button class="button-nav button-nav--primary">Próxima etapa →</button>`}
      >
        <div className="step-box">
          <div>
            <h3>Etapa 2: Dados da viagem</h3>
            <p>Informe os dados necessários para continuar com sua reserva.</p>
          </div>
          <div className="step-actions">
            <ButtonNav type="button">← Voltar</ButtonNav>
            <ButtonNav variant="primary" type="button">Próxima etapa →</ButtonNav>
          </div>
        </div>
      </Example>

      <Example
        title="5. Navegação em resultados"
        description="Mesma combinação depois de uma pesquisa de destinos."
        code={`<button class="button-nav">← Resultados anteriores</button>
<button class="button-nav button-nav--primary">Mais destinos →</button>`}
      >
        <div className="preview-row">
          <ButtonNav type="button">← Resultados anteriores</ButtonNav>
          <ButtonNav variant="primary" type="button">Mais destinos →</ButtonNav>
        </div>
      </Example>
    </DemoPage>
  );
}
