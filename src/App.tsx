import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { catalog } from "./data/catalog";
import { Overview } from "./pages/Overview";
import { ButtonPage } from "./pages/ButtonPage";
import { ButtonNavPage } from "./pages/ButtonNavPage";
import { BadgePage } from "./pages/BadgePage";
import { NavPage } from "./pages/NavPage";
import { LogoPage } from "./pages/LogoPage";
import { TopbarPage } from "./pages/TopbarPage";
import { FormPage } from "./pages/FormPage";
import { CheckboxPage } from "./pages/CheckboxPage";
import { CardPage } from "./pages/CardPage";
import { DestinationsPage } from "./pages/DestinationsPage";
import { HeroPage } from "./pages/HeroPage";
import { SearchPage } from "./pages/SearchPage";
import { GridPage } from "./pages/GridPage";
import { TablePage } from "./pages/TablePage";

const titles: Record<string, string> = {
  "/": "Visão geral",
  "/nav": "Nav",
  "/logo": "Logo",
  "/topbar": "Topbar",
  "/button": "Button",
  "/button-nav": "Button Nav",
  "/form": "Form",
  "/checkbox": "Checkbox",
  "/card": "Card",
  "/destinations": "Destinations",
  "/hero": "Hero",
  "/search": "Search",
  "/grid": "Grid",
  "/table": "Table",
  "/badge": "Badge",
};

export function App() {
  const { pathname } = useLocation();
  const current = titles[pathname] ?? "Design System";

  return (
    <div className="app-shell">
      <aside className="demo-sidebar">
        <NavLink className="demo-brand" to="/">
          <div className="demo-brand__icon">A3</div>
          <div>
            <div className="demo-brand__name">A3 Usabilidade</div>
            <div className="demo-brand__subtitle">Design System</div>
          </div>
        </NavLink>

        <nav className="demo-menu" aria-label="Navegação principal">
          <p className="demo-menu__title">Geral</p>
          <ul className="demo-menu__list">
            <li>
              <NavLink className={({ isActive }) => `demo-menu__link${isActive ? " demo-menu__link--active" : ""}`} to="/" end>
                Visão geral
              </NavLink>
            </li>
          </ul>

          {catalog.map((group) => (
            <div key={group.group}>
              <p className="demo-menu__title">{group.group}</p>
              <ul className="demo-menu__list">
                {group.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      className={({ isActive }) => `demo-menu__link${isActive ? " demo-menu__link--active" : ""}`}
                      to={item.path}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <div className="demo-main">
        <header className="demo-topbar">
          <p className="demo-topbar__breadcrumb">Design System / {current}</p>
          <span className="demo-topbar__version">React</span>
        </header>
        <div className="demo-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/nav" element={<NavPage />} />
            <Route path="/logo" element={<LogoPage />} />
            <Route path="/topbar" element={<TopbarPage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/button-nav" element={<ButtonNavPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/checkbox" element={<CheckboxPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/hero" element={<HeroPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/grid" element={<GridPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/badge" element={<BadgePage />} />
          </Routes>
        </div>
        <footer className="demo-footer">Design System A3 - Usabilidade | Projeto acadêmico</footer>
      </div>
    </div>
  );
}
