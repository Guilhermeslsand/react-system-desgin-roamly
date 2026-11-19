export const catalog = [
  {
    group: "Navegação",
    items: [
      { name: "Nav", path: "/nav", use: "Links de navegação em menus e seções." },
      { name: "Logo", path: "/logo", use: "Identificação visual da marca no cabeçalho e menu." },
      { name: "Topbar", path: "/topbar", use: "Cabeçalho interno com título, contexto e ações." },
    ],
  },
  {
    group: "Botões e ações",
    items: [
      { name: "Button", path: "/button", use: "Ações principais e secundárias, como salvar, editar e confirmar." },
      { name: "Button Nav", path: "/button-nav", use: "Botões utilizados para navegação entre páginas ou áreas." },
    ],
  },
  {
    group: "Formulários",
    items: [
      { name: "Form", path: "/form", use: "Campos de texto, seleção e faixa de valores." },
      { name: "Checkbox Group", path: "/checkbox", use: "Seleção de múltiplas opções e filtros." },
    ],
  },
  {
    group: "Conteúdo e cards",
    items: [
      { name: "Card", path: "/card", use: "Apresentação de informações, viagens, ofertas e produtos." },
      { name: "Destinations", path: "/destinations", use: "Grade de destinos disponíveis para consulta." },
      { name: "Hero", path: "/hero", use: "Área principal de destaque e apresentação de páginas." },
      { name: "Search", path: "/search", use: "Formulário de busca de viagens e destinos." },
    ],
  },
  {
    group: "Layout e estrutura",
    items: [
      { name: "Container e Grid", path: "/grid", use: "Centralização do conteúdo e grades de 2, 3 e 4 colunas." },
      { name: "Table", path: "/table", use: "Exibição de dados tabulares, como clientes e reservas." },
    ],
  },
  {
    group: "Feedback e indicadores",
    items: [{ name: "Badge", path: "/badge", use: "Indicadores de status, categorias e classificações." }],
  },
];

export const componentCount = catalog.reduce((total, group) => total + group.items.length, 0);
