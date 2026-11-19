import { DataTable } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

function Pill({ kind, children }: { kind: "ok" | "wait" | "no" | "info"; children: string }) {
  return <span className={`status-pill status-pill--${kind}`}>{children}</span>;
}

export function TablePage() {
  return (
    <DemoPage
      title="Componente Table"
      description="table-container cria a rolagem horizontal. table desenha a tabela. th e td herdam o espaçamento de .table th e .table td."
    >
      <Example
        title="1. Tabela de reservas"
        description="Cabeçalho e linhas dentro de table, envolvida por table-container."
        code={`<div class="table-container">
  <table class="table">
    <thead>
      <tr><th>Código</th><th>Cliente</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td>#RES001</td><td>Mariana Costa</td><td>Confirmada</td></tr>
    </tbody>
  </table>
</div>`}
      >
        <div className="table-frame">
          <h3>Reservas recentes</h3>
          <DataTable
            columns={["Código", "Cliente", "Destino", "Data", "Valor", "Status"]}
            rows={[
              ["#RES001", "Mariana Costa", "Rio de Janeiro", "15/12/2026", "R$ 2.450,00", <Pill kind="ok">Confirmada</Pill>],
              ["#RES002", "Pedro Almeida", "Florianópolis", "20/12/2026", "R$ 3.100,00", <Pill kind="wait">Pendente</Pill>],
              ["#RES003", "Camila Santos", "Salvador", "05/01/2027", "R$ 1.890,00", <Pill kind="no">Cancelada</Pill>],
            ]}
          />
        </div>
      </Example>

      <Example
        title="2. Tabela de clientes"
        description="A mesma estrutura, com um link de ação na última coluna."
        code={`<div class="table-container">
  <table class="table">
    <thead><tr><th>ID</th><th>Nome</th><th>Situação</th></tr></thead>
    <tbody><tr><td>001</td><td>João Oliveira</td><td>Ativo</td></tr></tbody>
  </table>
</div>`}
      >
        <div className="table-frame">
          <h3>Clientes cadastrados</h3>
          <DataTable
            columns={["ID", "Nome", "E-mail", "Cadastro", "Situação", "Ação"]}
            rows={[
              ["001", "João Oliveira", "joao@email.com", "10/10/2026", <Pill kind="info">Ativo</Pill>, <a className="table-link" href="#cliente-001">Visualizar</a>],
              ["002", "Ana Rodrigues", "ana@email.com", "12/10/2026", <Pill kind="info">Ativo</Pill>, <a className="table-link" href="#cliente-002">Visualizar</a>],
              ["003", "Lucas Ferreira", "lucas@email.com", "15/10/2026", <Pill kind="wait">Pendente</Pill>, <a className="table-link" href="#cliente-003">Visualizar</a>],
            ]}
          />
        </div>
      </Example>

      <Example
        title="3. Tabela de pacotes de viagem"
        description="Pacotes disponíveis, ainda com table e table-container."
        code={`<div class="table-container">
  <table class="table">
    <thead><tr><th>Pacote</th><th>Destino</th><th>Status</th></tr></thead>
  </table>
</div>`}
      >
        <div className="table-frame">
          <h3>Pacotes disponíveis</h3>
          <DataTable
            columns={["Pacote", "Destino", "Duração", "Preço", "Vagas", "Status"]}
            rows={[
              ["Verão no Nordeste", "Maceió", "7 dias", "R$ 2.999,00", "12", <Pill kind="info">Disponível</Pill>],
              ["Inverno na Serra", "Gramado", "5 dias", "R$ 1.799,00", "8", <Pill kind="info">Disponível</Pill>],
              ["Férias em Família", "Porto Seguro", "6 dias", "R$ 2.200,00", "0", <Pill kind="wait">Esgotado</Pill>],
            ]}
          />
        </div>
      </Example>

      <Example
        title="4. Tabela com rolagem horizontal"
        description="table-container permite rolar. table--wide só garante a largura mínima nesta demonstração."
        code={`<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Código</th><th>Cliente</th><th>Destino</th>
        <th>Origem</th><th>Partida</th><th>Retorno</th>
      </tr>
    </thead>
  </table>
</div>`}
      >
        <div className="table-frame">
          <h3>Relatório detalhado de reservas</h3>
          <DataTable
            wide
            columns={["Código", "Cliente", "Destino", "Origem", "Partida", "Retorno", "Passageiros", "Valor", "Pagamento"]}
            rows={[
              ["#RES101", "Mariana Costa", "Rio de Janeiro", "São Paulo", "15/12/2026", "22/12/2026", "2", "R$ 2.450,00", "Cartão"],
              ["#RES102", "Pedro Almeida", "Florianópolis", "Curitiba", "20/12/2026", "27/12/2026", "3", "R$ 3.100,00", "PIX"],
              ["#RES103", "Camila Santos", "Salvador", "Belo Horizonte", "05/01/2027", "11/01/2027", "1", "R$ 1.890,00", "Cartão"],
            ]}
          />
        </div>
      </Example>

      <p className="note">
        A rolagem horizontal é de <code>.table-container</code>. Linhas e colunas são de <code>.table</code>.
      </p>
    </DemoPage>
  );
}
