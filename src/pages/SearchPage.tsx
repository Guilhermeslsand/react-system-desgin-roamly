import { Hero, SearchBar } from "../components/ui";
import { DemoPage, Example } from "../demo/Example";

export function SearchPage() {
  return (
    <DemoPage
      title="Componente Search Bar"
      description="A barra é search-bar. Cada campo fica em search-bar__group, com search-bar__label e search-bar__input. O risco entre campos é search-bar__divider e o botão é search-bar__button."
    >
      <Example
        title="1. Search Bar integrada ao Hero"
        description="search-bar fica absoluta na base do hero e invade um pouco o conteúdo seguinte."
        code={`<form class="search-bar">
  <div class="search-bar__group">
    <label class="search-bar__label">DESTINO</label>
    <input class="search-bar__input" type="text" placeholder="Para onde vamos?">
  </div>
  <div class="search-bar__divider"></div>
  <button class="search-bar__button" type="submit">Buscar</button>
</form>`}
      >
        <div className="search-stage">
          <Hero>
            <span className="hero__tag">Sua próxima aventura</span>
            <h2 className="hero__title">Encontre sua próxima viagem</h2>
            <p className="hero__subtitle">Pesquise destinos, datas e encontre as melhores opções para viajar.</p>
          </Hero>
          <SearchBar
            actionLabel="Buscar"
            fields={[
              { id: "destination", label: "DESTINO", placeholder: "Para onde vamos?" },
              { id: "departure", label: "CHECK-IN", type: "date" },
              { id: "return", label: "CHECK-OUT", type: "date" },
              { id: "passengers", label: "PASSAGEIROS", type: "number", min: "1", value: "2" },
            ]}
          />
        </div>
        <div className="hero-follow">
          <h3>Destinos populares</h3>
          <p>Explore os destinos mais procurados e encontre a melhor opção para sua próxima viagem.</p>
        </div>
      </Example>

      <Example
        title="2. Search Bar isolada"
        description="As classes do componente são as mesmas. O container search-plain só tira o posicionamento absoluto desta página."
        code={`<form class="search-bar">
  <div class="search-bar__group">
    <label class="search-bar__label">DESTINO</label>
    <input class="search-bar__input" placeholder="Ex: Rio de Janeiro">
  </div>
  <div class="search-bar__divider"></div>
  <button class="search-bar__button">Pesquisar</button>
</form>`}
      >
        <div className="search-plain">
          <SearchBar
            actionLabel="Pesquisar"
            fields={[
              { id: "destination-2", label: "DESTINO", placeholder: "Ex: Rio de Janeiro" },
              { id: "date-2", label: "DATA", type: "date" },
              { id: "passengers-2", label: "PESSOAS", type: "number", min: "1", value: "1" },
            ]}
          />
        </div>
      </Example>

      <Example
        title="3. Search Bar com campos textuais"
        description="Destino, período e viajantes, todos com search-bar__input."
        code={`<div class="search-bar__group">
  <label class="search-bar__label">PERÍODO</label>
  <input class="search-bar__input" placeholder="Escolha as datas">
</div>
<button class="search-bar__button">Buscar viagens</button>`}
      >
        <div className="search-plain">
          <SearchBar
            actionLabel="Buscar viagens"
            fields={[
              { id: "destination-3", label: "PARA ONDE?", placeholder: "São Paulo, Brasil" },
              { id: "period-3", label: "PERÍODO", placeholder: "Escolha as datas" },
              { id: "travelers-3", label: "VIAJANTES", value: "2 adultos" },
            ]}
          />
        </div>
      </Example>

      <p className="note">
        Os formulários são demonstrativos. Uma pesquisa real depende da integração com a API de busca.
      </p>
    </DemoPage>
  );
}
