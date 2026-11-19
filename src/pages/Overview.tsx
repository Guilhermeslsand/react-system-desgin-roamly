import { Link } from "react-router-dom";
import { catalog, componentCount } from "../data/catalog";

export function Overview() {
  return (
    <>
      <section className="demo-hero-banner">
        <span className="demo-hero-banner__tag">Projeto A3 - Usabilidade</span>
        <h1 className="demo-hero-banner__title">Design System A3</h1>
        <p className="demo-hero-banner__description">
          Componentes visuais da aplicação em React. Cada demonstração mostra o
          efeito e, logo abaixo, as classes CSS que produzem aquele resultado.
        </p>
      </section>

      <section className="demo-stats" aria-label="Resumo do catálogo">
        <article className="demo-stat">
          <p className="demo-stat__label">Componentes catalogados</p>
          <p className="demo-stat__value">{componentCount}</p>
        </article>
        <article className="demo-stat">
          <p className="demo-stat__label">Componentes com CSS</p>
          <p className="demo-stat__value">{componentCount}</p>
        </article>
        <article className="demo-stat">
          <p className="demo-stat__label">Implementações React</p>
          <p className="demo-stat__value">{componentCount}</p>
        </article>
      </section>

      <section className="catalog-section">
        <h2>Catálogo de componentes</h2>
        <p>Abra a demonstração para ver o componente e as classes de cada variação.</p>
        <div className="demo-table-wrapper">
          <table className="demo-table">
            <thead>
              <tr>
                <th>Componente / Onde utilizar</th>
                <th>CSS disponível</th>
                <th>React implementado</th>
              </tr>
            </thead>
            <tbody>
              {catalog.flatMap((group) =>
                group.items.map((item) => (
                  <tr key={item.path}>
                    <td>
                      <div className="demo-component">
                        <span className="demo-component__name">{item.name}</span>
                        <span>{item.use}</span>
                        <Link className="demo-component__link" to={item.path}>
                          Ver demonstração →
                        </Link>
                      </div>
                    </td>
                    <td>
                      <span className="demo-status demo-status--success">Sim</span>
                    </td>
                    <td>
                      <span className="demo-status demo-status--error">Não</span>
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
