import type { ReactNode } from "react";

export function Example({
  title,
  description,
  children,
  code,
}: {
  title: string;
  description: string;
  children: ReactNode;
  code: string;
}) {
  return (
    <section className="example">
      <div className="example__info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="example__preview">{children}</div>
      <aside className="class-hint">
        <span className="class-hint__label">Classes CSS deste exemplo</span>
        <pre>
          <code>{code.trim()}</code>
        </pre>
      </aside>
    </section>
  );
}

export function DemoPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <h1 className="page-title">{title}</h1>
      <p className="page-description">{description}</p>
      {children}
    </>
  );
}
