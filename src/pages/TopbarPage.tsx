import type { ReactNode } from "react";
import { Topbar } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

function Frame({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <div className="topbar-page">
      {children}
      <div className="topbar-body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export function TopbarPage() {
  return (
    <DemoPage
      title="Componente Topbar"
      description="A barra usa topbar. O título fica em topbar__info, a etiqueta em topbar__indicator e os controles em topbar__actions."
    >
      <Example
        title="1. Topbar padrão"
        description="Título, indicador de contexto e ações à direita."
        code={`<header class="topbar">
  <div class="topbar__info">
    <h2 class="topbar__title">Dashboard</h2>
    <span class="topbar__indicator">Visão geral</span>
  </div>
  <div class="topbar__actions">...</div>
</header>`}
      >
        <Frame title="Bem-vindo ao painel administrativo" text="Acompanhe reservas, gerencie destinos e visualize os principais indicadores.">
          <Topbar
            title="Dashboard"
            indicator="Visão geral"
            actions={
              <>
                <button className="icon-button" type="button" aria-label="Notificações">♧</button>
                <div className="user-chip">
                  <div className="user-chip__avatar">AD</div>
                  <div>
                    <span className="user-chip__name">Administrador</span>
                    <span className="user-chip__role">Administrador</span>
                  </div>
                </div>
              </>
            }
          />
        </Frame>
      </Example>

      <Example
        title="2. Topbar de gerenciamento de viagens"
        description="O indicador aceita uma classe extra só para a cor. A estrutura continua a mesma."
        code={`<span class="topbar__indicator indicator--blue">24 pacotes</span>
<div class="topbar__actions">
  <button class="mini-button">Exportar</button>
  <button class="mini-button mini-button--primary">Nova viagem</button>
</div>`}
      >
        <Frame title="Gerenciamento de pacotes" text="Cadastre, atualize e acompanhe os pacotes de viagem.">
          <Topbar
            title="Viagens"
            indicator="24 pacotes"
            indicatorClassName="indicator--blue"
            actions={
              <>
                <button className="mini-button" type="button">↓ Exportar</button>
                <button className="mini-button mini-button--primary" type="button">+ Nova viagem</button>
              </>
            }
          />
        </Frame>
      </Example>

      <Example
        title="3. Topbar de clientes"
        description="Mesma estrutura, com outra cor no indicador."
        code={`<h2 class="topbar__title">Clientes</h2>
<span class="topbar__indicator indicator--orange">156 cadastrados</span>`}
      >
        <Frame title="Gerenciamento de clientes" text="Consulte os usuários cadastrados e gerencie suas contas.">
          <Topbar
            title="Clientes"
            indicator="156 cadastrados"
            indicatorClassName="indicator--orange"
            actions={
              <>
                <button className="mini-button" type="button">↓ Exportar relatório</button>
                <button className="mini-button mini-button--primary" type="button">+ Novo cliente</button>
              </>
            }
          />
        </Frame>
      </Example>

      <Example
        title="4. Topbar com ações reduzidas"
        description="Poucas ações, ainda dentro de topbar__actions."
        code={`<div class="topbar__actions">
  <button class="mini-button">Cancelar</button>
  <button class="mini-button mini-button--primary">Salvar alterações</button>
</div>`}
      >
        <Frame title="Configurações da plataforma" text="Gerencie as preferências e informações gerais da aplicação.">
          <Topbar
            title="Configurações"
            indicator="Conta"
            actions={
              <>
                <button className="mini-button" type="button">Cancelar</button>
                <button className="mini-button mini-button--primary" type="button">Salvar alterações</button>
              </>
            }
          />
        </Frame>
      </Example>

      <Example
        title="5. Topbar responsiva"
        description="Em telas estreitas o CSS de topbar quebra a linha. As classes do componente não mudam."
        code={`<header class="topbar">
  <div class="topbar__info">
    <h2 class="topbar__title">Reservas</h2>
    <span class="topbar__indicator">18 registros</span>
  </div>
  <div class="topbar__actions">...</div>
</header>`}
      >
        <Frame title="Reservas recentes" text="Consulte e acompanhe as reservas realizadas pelos clientes.">
          <Topbar
            title="Reservas"
            indicator="18 registros"
            actions={
              <>
                <button className="mini-button" type="button">Filtrar</button>
                <button className="mini-button mini-button--primary" type="button">Exportar</button>
              </>
            }
          />
        </Frame>
      </Example>
    </DemoPage>
  );
}
