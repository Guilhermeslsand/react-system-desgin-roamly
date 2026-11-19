import { Badge } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

export function BadgePage() {
  return (
    <DemoPage
      title="Demonstração de Badges"
      description="Etiquetas curtas de status. A base é badge. O verde de confirmação é badge-success."
    >
      <Example
        title="1. Badge padrão"
        description="Etiqueta informativa, sem variação de cor."
        code={`<span class="badge">Informação</span>`}
      >
        <div className="preview-row">
          <Badge>Informação</Badge>
          <Badge>Internacional</Badge>
          <Badge>Disponível</Badge>
        </div>
      </Example>

      <Example
        title="2. Badge de sucesso"
        description="Confirmação, compatibilidade ou operação concluída."
        code={`<span class="badge badge-success">Compatível</span>`}
      >
        <div className="preview-row">
          <Badge success>Compatível</Badge>
          <Badge success>Adicionado</Badge>
          <Badge success>Concluído</Badge>
        </div>
      </Example>

      <Example
        title="3. Badges em contexto"
        description="A mesma classe ao lado do resumo de um pacote."
        code={`<span class="badge badge-success">Disponível</span>
<span class="badge">Internacional</span>
<span class="badge badge-success">Confirmado</span>`}
      >
        <div className="stack">
          <div className="badge-context">
            <div>
              <strong>Pacote para Rio de Janeiro</strong>
              <span>5 dias · Hotel e passagem inclusos</span>
            </div>
            <Badge success>Disponível</Badge>
          </div>
          <div className="badge-context">
            <div>
              <strong>Pacote para Buenos Aires</strong>
              <span>7 dias · Hotel incluso</span>
            </div>
            <Badge>Internacional</Badge>
          </div>
          <div className="badge-context">
            <div>
              <strong>Reserva de hotel</strong>
              <span>Reserva confirmada</span>
            </div>
            <Badge success>Confirmado</Badge>
          </div>
        </div>
      </Example>
    </DemoPage>
  );
}
