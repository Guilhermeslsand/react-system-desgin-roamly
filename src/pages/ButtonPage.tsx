import { Button } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

export function ButtonPage() {
  return (
    <DemoPage
      title="Demonstração de Buttons"
      description="Variações do botão reutilizável. A base é a classe button. Os modificadores mudam cor, borda e largura."
    >
      <Example
        title="1. Botão padrão"
        description="Estrutura base do componente, sem modificadores."
        code={`<button class="button" type="button">Botão padrão</button>`}
      >
        <Button type="button">Botão padrão</Button>
      </Example>

      <Example
        title="2. Botão primary"
        description="Ação principal, com fundo na cor primária."
        code={`<button class="button button--primary" type="button">Continuar</button>`}
      >
        <div className="preview-row">
          <Button variant="primary" type="button">Continuar</Button>
          <Button variant="primary" type="button">Salvar</Button>
          <Button variant="primary" type="button">Confirmar</Button>
        </div>
      </Example>

      <Example
        title="3. Botão outline"
        description="Ação secundária, com fundo claro e borda."
        code={`<button class="button button--outline" type="button">Cancelar</button>`}
      >
        <div className="preview-row">
          <Button variant="outline" type="button">Cancelar</Button>
          <Button variant="outline" type="button">Voltar</Button>
          <Button variant="outline" type="button">Ver detalhes</Button>
        </div>
      </Example>

      <Example
        title="4. Botão full"
        description="Ocupa toda a largura do elemento pai."
        code={`<button class="button button--primary button--full" type="button">Continuar</button>
<button class="button button--outline button--full" type="button">Cancelar</button>`}
      >
        <div className="preview-narrow stack">
          <Button variant="primary" full type="button">Continuar</Button>
          <Button variant="outline" full type="button">Cancelar</Button>
        </div>
      </Example>

      <Example
        title="5. Combinação de modificadores"
        description="Primary ou outline junto com full no mesmo botão."
        code={`<button class="button button--primary button--full">Finalizar reserva</button>
<button class="button button--outline button--full">Voltar para destinos</button>`}
      >
        <div className="preview-row">
          <div className="preview-narrow">
            <Button variant="primary" full type="button">Finalizar reserva</Button>
          </div>
          <div className="preview-narrow">
            <Button variant="outline" full type="button">Voltar para destinos</Button>
          </div>
        </div>
      </Example>

      <Example
        title="6. Botões em formulário"
        description="Os mesmos modificadores dentro de um formulário de busca."
        code={`<button class="button button--primary button--full" type="submit">Buscar destinos</button>
<button class="button button--outline button--full" type="reset">Limpar pesquisa</button>`}
      >
        <form className="preview-form" onSubmit={(event) => event.preventDefault()}>
          <input type="text" name="destination" placeholder="Digite seu destino" />
          <Button variant="primary" full type="submit">Buscar destinos</Button>
          <Button variant="outline" full type="reset">Limpar pesquisa</Button>
        </form>
      </Example>
    </DemoPage>
  );
}
