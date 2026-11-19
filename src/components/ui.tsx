import type { ButtonHTMLAttributes, ReactNode, SelectHTMLAttributes, InputHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "outline";
  full?: boolean;
};

export function buttonClass(variant: ButtonProps["variant"] = "default", full = false) {
  return [
    "button",
    variant === "primary" ? "button--primary" : "",
    variant === "outline" ? "button--outline" : "",
    full ? "button--full" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({ variant = "default", full = false, className = "", ...props }: ButtonProps) {
  return <button className={`${buttonClass(variant, full)} ${className}`.trim()} {...props} />;
}

type ButtonNavProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary";
};

export function buttonNavClass(variant: ButtonNavProps["variant"] = "default") {
  return variant === "primary" ? "button-nav button-nav--primary" : "button-nav";
}

export function ButtonNav({ variant = "default", className = "", ...props }: ButtonNavProps) {
  return <button className={`${buttonNavClass(variant)} ${className}`.trim()} {...props} />;
}

export function badgeClass(success = false) {
  return success ? "badge badge-success" : "badge";
}

export function Badge({ success = false, children }: { success?: boolean; children: ReactNode }) {
  return <span className={badgeClass(success)}>{children}</span>;
}

export function CheckboxGroup({
  children,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { children: ReactNode }) {
  return (
    <label className="checkbox-group">
      <input type="checkbox" {...props} />
      {children}
    </label>
  );
}

export function FormGroup({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="form-input" {...props} />;
}

export function SelectInput(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className="form-select" {...props} />;
}

export function RangeInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="form-range" type="range" {...props} />;
}

export function Logo({
  icon,
  name,
  imageSrc,
  imageAlt,
}: {
  icon?: string;
  name?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div className="logo">
      {imageSrc ? <img className="logo__img" src={imageSrc} alt={imageAlt ?? name ?? ""} /> : null}
      {icon ? (
        <div className="logo__icon" aria-hidden={name ? true : undefined} aria-label={name && !imageSrc ? name : undefined}>
          {icon}
        </div>
      ) : null}
      {name && !imageSrc ? <span className="logo-text">{name}</span> : null}
    </div>
  );
}

export type NavItem = { href: string; label: string; icon?: string; active?: boolean };

export function NavMenu({
  label,
  sections,
}: {
  label: string;
  sections: { title?: string; items: NavItem[] }[];
}) {
  return (
    <nav className="nav" aria-label={label}>
      {sections.map((section) => (
        <div className="nav__section" key={section.title ?? section.items[0]?.label}>
          {section.title ? <h3 className="nav__section-title">{section.title}</h3> : null}
          <ul className="nav__list">
            {section.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={item.active ? "nav__link nav__link--active" : "nav__link"}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.icon ? (
                    <span aria-hidden="true">{item.icon}</span>
                  ) : null}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function Topbar({
  title,
  indicator,
  indicatorClassName = "",
  actions,
}: {
  title: string;
  indicator: string;
  indicatorClassName?: string;
  actions: ReactNode;
}) {
  return (
    <header className="topbar">
      <div className="topbar__info">
        <h2 className="topbar__title">{title}</h2>
        <span className={`topbar__indicator ${indicatorClassName}`.trim()}>{indicator}</span>
      </div>
      <div className="topbar__actions">{actions}</div>
    </header>
  );
}

export function Card({
  interactive = false,
  destination = false,
  children,
}: {
  interactive?: boolean;
  destination?: boolean;
  children: ReactNode;
}) {
  const classes = [
    "card",
    interactive ? "card--interactive" : "",
    destination ? "card--destination" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <article className={classes}>{children}</article>;
}

export function Hero({ children }: { children: ReactNode }) {
  return <section className="hero">{children}</section>;
}

export function HomeCard({ children }: { children: ReactNode }) {
  return <div className="home-card">{children}</div>;
}

export type SearchField = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  min?: string;
};

export function SearchBar({ fields, actionLabel }: { fields: SearchField[]; actionLabel: string }) {
  return (
    <form className="search-bar" onSubmit={(event) => event.preventDefault()}>
      {fields.map((field, index) => (
        <span key={field.id} style={{ display: "contents" }}>
          {index > 0 ? <div className="search-bar__divider" /> : null}
          <div className="search-bar__group">
            <label className="search-bar__label" htmlFor={field.id}>
              {field.label}
            </label>
            <input
              className="search-bar__input"
              id={field.id}
              name={field.id}
              type={field.type ?? "text"}
              placeholder={field.placeholder}
              defaultValue={field.value}
              min={field.min}
            />
          </div>
        </span>
      ))}
      <button className="search-bar__button" type="submit">
        <span aria-hidden="true">⌕</span>
        {actionLabel}
      </button>
    </form>
  );
}

export function DestinationsSection({
  title,
  subtitle,
  link,
  children,
}: {
  title: string;
  subtitle: string;
  link?: { href: string; label: string };
  children?: ReactNode;
}) {
  return (
    <section className="destinations">
      <header className="destinations__header">
        <div>
          <h2 className="destinations__title">{title}</h2>
          <p className="destinations__subtitle">{subtitle}</p>
        </div>
        {link ? (
          <a className="destinations__link" href={link.href}>
            {link.label}
          </a>
        ) : null}
      </header>
      {children ? <div className="destinations__grid">{children}</div> : null}
    </section>
  );
}

export function DataTable({
  columns,
  rows,
  wide = false,
}: {
  columns: string[];
  rows: ReactNode[][];
  wide?: boolean;
}) {
  return (
    <div className="table-container">
      <table className={wide ? "table table--wide" : "table"}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
