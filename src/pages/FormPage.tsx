import { useState } from "react";
import { FormGroup, RangeInput, SelectInput, TextInput } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

export function FormPage() {
  const [price, setPrice] = useState(5000);

  return (
    <DemoPage
      title="Demonstração de Formulários"
      description="Cada campo fica em form-group, com form-label. Texto usa form-input, lista usa form-select e o slider usa form-range."
    >
      <Example
        title="1. Campos de texto"
        description="Label acima do campo de digitação."
        code={`<div class="form-group">
  <label class="form-label" for="name">Nome completo</label>
  <input class="form-input" id="name" type="text">
</div>`}
      >
        <form className="preview-narrow" onSubmit={(event) => event.preventDefault()}>
          <FormGroup label="Nome completo" htmlFor="name">
            <TextInput id="name" name="name" placeholder="Digite seu nome completo" />
          </FormGroup>
          <FormGroup label="E-mail" htmlFor="email">
            <TextInput id="email" name="email" type="email" placeholder="exemplo@email.com" />
          </FormGroup>
          <FormGroup label="Telefone" htmlFor="phone">
            <TextInput id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" />
          </FormGroup>
        </form>
      </Example>

      <Example
        title="2. Campos de seleção"
        description="O select usa form-select no lugar de form-input. O grupo e a label são os mesmos."
        code={`<div class="form-group">
  <label class="form-label" for="destination">Destino</label>
  <select class="form-select" id="destination">
    <option>Selecione um destino</option>
  </select>
</div>`}
      >
        <form className="preview-narrow">
          <FormGroup label="Destino" htmlFor="destination">
            <SelectInput id="destination" name="destination" defaultValue="">
              <option value="">Selecione um destino</option>
              <option value="rio">Rio de Janeiro</option>
              <option value="paris">Paris</option>
              <option value="new-york">Nova York</option>
              <option value="tokyo">Tóquio</option>
            </SelectInput>
          </FormGroup>
          <FormGroup label="Quantidade de passageiros" htmlFor="passengers">
            <SelectInput id="passengers" name="passengers" defaultValue="1">
              <option value="1">1 passageiro</option>
              <option value="2">2 passageiros</option>
              <option value="3">3 passageiros</option>
              <option value="4">4 passageiros</option>
            </SelectInput>
          </FormGroup>
        </form>
      </Example>

      <Example
        title="3. Formulário de cadastro de passageiro"
        description="form-input e form-select lado a lado. O foco azul vem de form-input:focus e form-select:focus."
        code={`<div class="form-group">
  <label class="form-label">Nome completo</label>
  <input class="form-input" type="text">
</div>
<div class="form-group">
  <label class="form-label">Nacionalidade</label>
  <select class="form-select">...</select>
</div>`}
      >
        <form className="preview-narrow" style={{ maxWidth: 640 }}>
          <div className="two-col">
            <FormGroup label="Nome completo" htmlFor="full-name">
              <TextInput id="full-name" placeholder="Seu nome" />
            </FormGroup>
            <FormGroup label="Data de nascimento" htmlFor="birth-date">
              <TextInput id="birth-date" type="date" />
            </FormGroup>
            <FormGroup label="CPF" htmlFor="document">
              <TextInput id="document" placeholder="000.000.000-00" />
            </FormGroup>
            <FormGroup label="Nacionalidade" htmlFor="nationality">
              <SelectInput id="nationality" defaultValue="br">
                <option value="br">Brasileira</option>
                <option value="us">Americana</option>
                <option value="pt">Portuguesa</option>
              </SelectInput>
            </FormGroup>
          </div>
        </form>
      </Example>

      <Example
        title="4. Formulário de pagamento"
        description="Os mesmos campos em uma tela de pagamento."
        code={`<input class="form-input" placeholder="Nome do titular">
<input class="form-input" placeholder="0000 0000 0000 0000">
<select class="form-select">...</select>`}
      >
        <form className="preview-narrow" style={{ maxWidth: 640 }}>
          <FormGroup label="Nome impresso no cartão" htmlFor="card-name">
            <TextInput id="card-name" placeholder="Nome do titular" />
          </FormGroup>
          <FormGroup label="Número do cartão" htmlFor="card-number">
            <TextInput id="card-number" placeholder="0000 0000 0000 0000" />
          </FormGroup>
          <div className="two-col">
            <FormGroup label="Validade" htmlFor="expiration">
              <TextInput id="expiration" placeholder="MM/AA" />
            </FormGroup>
            <FormGroup label="Parcelas" htmlFor="installments">
              <SelectInput id="installments" defaultValue="1">
                <option value="1">1x</option>
                <option value="2">2x</option>
                <option value="3">3x</option>
                <option value="6">6x</option>
                <option value="12">12x</option>
              </SelectInput>
            </FormGroup>
          </div>
          <p className="hint">Demonstração visual. Não insira dados reais de cartão.</p>
        </form>
      </Example>

      <Example
        title="5. Controle de faixa de preço"
        description="O slider usa form-range dentro do mesmo form-group."
        code={`<div class="form-group">
  <label class="form-label" for="price-range">Preço máximo da viagem</label>
  <input class="form-range" type="range" id="price-range" min="500" max="10000">
</div>`}
      >
        <div className="surface-card preview-narrow">
          <FormGroup label="Preço máximo da viagem" htmlFor="price-range">
            <RangeInput
              id="price-range"
              min={500}
              max={10000}
              step={100}
              value={price}
              onChange={(event) => setPrice(Number(event.target.value))}
            />
            <div className="range-scale">
              <span>R$ 500</span>
              <strong>
                {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}
              </strong>
              <span>R$ 10.000</span>
            </div>
          </FormGroup>
        </div>
      </Example>

      <Example
        title="6. Formulário completo de busca"
        description="Select, datas e faixa no mesmo formulário."
        code={`<select class="form-select"></select>
<input class="form-input" type="date">
<input class="form-range" type="range">`}
      >
        <form className="preview-narrow" style={{ maxWidth: 640 }} onSubmit={(event) => event.preventDefault()}>
          <FormGroup label="Destino desejado" htmlFor="search-destination">
            <SelectInput id="search-destination" defaultValue="">
              <option value="">Escolha seu destino</option>
              <option value="rio">Rio de Janeiro</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tóquio</option>
            </SelectInput>
          </FormGroup>
          <div className="two-col">
            <FormGroup label="Data de ida" htmlFor="departure">
              <TextInput id="departure" type="date" />
            </FormGroup>
            <FormGroup label="Data de volta" htmlFor="return">
              <TextInput id="return" type="date" />
            </FormGroup>
          </div>
          <FormGroup label="Orçamento máximo" htmlFor="budget">
            <RangeInput id="budget" min={500} max={10000} step={100} defaultValue={3000} />
          </FormGroup>
          <div className="form-actions">
            <button type="submit">Buscar viagens</button>
            <button type="reset">Limpar filtros</button>
          </div>
        </form>
      </Example>
    </DemoPage>
  );
}
