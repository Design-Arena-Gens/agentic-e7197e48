import { ReactNode } from "react";
import styles from "./LogicGateCard.module.css";

interface LogicGateCardProps {
  title: string;
  description: string;
  symbol: string;
  highlight: string;
  children?: ReactNode;
  footer?: ReactNode;
}

export function LogicGateCard({
  title,
  description,
  symbol,
  highlight,
  children,
  footer
}: LogicGateCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className={styles.symbol}>{symbol}</span>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.highlight}>{highlight}</p>
        </div>
      </header>
      <p className={styles.description}>{description}</p>
      {children && <div className={styles.content}>{children}</div>}
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </article>
  );
}
