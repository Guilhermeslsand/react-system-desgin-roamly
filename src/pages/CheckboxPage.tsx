import { CheckboxGroup } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

export function CheckboxPage() {
  return (
    <DemoPage
      title="Demonstração de Checkbox Group"
      description="A opção inteira, caixa e texto, fica em checkbox-group. A cor da caixa vem do CSS do input dentro desse bloco."
    >
      <Example
        title="1. Checkbox individual"
        description="Uma opção por bloco."
        code={`<label class="checkbox-group">
  <input type="checkbox" name="newsletter">
  Receber novidades e promoções
</label>`}
      >
        <div className="stack">
          <CheckboxGroup name="newsletter">Receber novidades e promoções</CheckboxGroup>
          <CheckboxGroup name="notifications" defaultChecked>Receber notificações</CheckboxGroup>
        </div>
      </Example>

      <Example
        title="2. Filtros de destinos"
        description="Várias checkbox-group empilhadas no mesmo filtro."
        code={`<label class="checkbox-group">
  <input type="checkbox" name="destination" value="praia" checked>
  Praia
</label>`}
      >
        <div className="surface-card" style={{ maxWidth: 360 }}>
          <h3>Tipo de destino</h3>
          <div className="stack">
            <CheckboxGroup name="destination" value="praia" defaultChecked>Praia</CheckboxGroup>
            <CheckboxGroup name="destination" value="montanha">Montanha</CheckboxGroup>
            <CheckboxGroup name="destination" value="cidade">Cidade</CheckboxGroup>
            <CheckboxGroup name="destination" value="campo">Campo</CheckboxGroup>
          </div>
        </div>
      </Example>

      <Example
        title="3. Preferências de viagem"
        description="A classe não muda. Cada grupo de opções repete checkbox-group."
        code={`<label class="checkbox-group">
  <input type="checkbox" name="services" value="hotel" checked>
  Hospedagem
</label>`}
      >
        <div className="two-col" style={{ gap: 20 }}>
          <div className="surface-card">
            <h3>Serviços desejados</h3>
            <div className="stack">
              <CheckboxGroup name="services" value="hotel" defaultChecked>Hospedagem</CheckboxGroup>
              <CheckboxGroup name="services" value="flight" defaultChecked>Passagem aérea</CheckboxGroup>
              <CheckboxGroup name="services" value="transfer">Transfer</CheckboxGroup>
              <CheckboxGroup name="services" value="insurance">Seguro viagem</CheckboxGroup>
            </div>
          </div>
          <div className="surface-card">
            <h3>Tipo de hospedagem</h3>
            <div className="stack">
              <CheckboxGroup name="accommodation" value="hotel">Hotel</CheckboxGroup>
              <CheckboxGroup name="accommodation" value="resort">Resort</CheckboxGroup>
              <CheckboxGroup name="accommodation" value="hostel">Hostel</CheckboxGroup>
              <CheckboxGroup name="accommodation" value="apartment">Apartamento</CheckboxGroup>
            </div>
          </div>
        </div>
      </Example>

      <Example
        title="4. Checkboxes em linha"
        description="A classe continua checkbox-group. A linha vem do container da página."
        code={`<label class="checkbox-group">
  <input type="checkbox" name="period" value="morning">
  Manhã
</label>`}
      >
        <div className="inline-row">
          <CheckboxGroup name="period" value="morning">Manhã</CheckboxGroup>
          <CheckboxGroup name="period" value="afternoon">Tarde</CheckboxGroup>
          <CheckboxGroup name="period" value="night">Noite</CheckboxGroup>
        </div>
      </Example>

      <Example
        title="5. Checkbox em formulário"
        description="Termos e preferências com a mesma classe, dentro do formulário."
        code={`<label class="checkbox-group">
  <input type="checkbox" name="terms" required>
  Li e aceito os termos de uso.
</label>`}
      >
        <form className="stack preview-narrow" onSubmit={(event) => event.preventDefault()}>
          <CheckboxGroup name="terms" value="accepted" required>Li e aceito os termos de uso.</CheckboxGroup>
          <CheckboxGroup name="privacy" value="accepted" required>Li e aceito a política de privacidade.</CheckboxGroup>
          <CheckboxGroup name="promotions" value="yes">Desejo receber ofertas e promoções.</CheckboxGroup>
          <div className="form-actions">
            <button type="submit">Confirmar</button>
            <button type="reset">Limpar</button>
          </div>
        </form>
      </Example>
    </DemoPage>
  );
}
