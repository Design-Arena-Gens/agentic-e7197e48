"use client";

import { useMemo, useState } from "react";
import styles from "./InputTogglePanel.module.css";

type LogicResult = {
  label: string;
  value: 0 | 1;
  description: string;
};

export function InputTogglePanel() {
  const [inputA, setInputA] = useState<0 | 1>(0);
  const [inputB, setInputB] = useState<0 | 1>(0);

  const outputs = useMemo<LogicResult[]>(() => {
    const andValue: 0 | 1 = (inputA && inputB) as 0 | 1;
    const orValue: 0 | 1 = (inputA || inputB) as 0 | 1;

    return [
      {
        label: "AND (A · B)",
        value: andValue,
        description: andValue
          ? "Both inputs are high, so the AND gate output is high."
          : "At least one input is low, so the AND output stays low."
      },
      {
        label: "OR (A + B)",
        value: orValue,
        description: orValue
          ? "Any high input makes the OR gate output high."
          : "No inputs are high, so the OR output remains low."
      }
    ];
  }, [inputA, inputB]);

  return (
    <section className={styles.panel}>
      <div className={styles.controls}>
        <h3>Test the inputs</h3>
        <p>Toggle the switches to observe how AND and OR outputs react.</p>
        <div className={styles.switchRow}>
          <label className={styles.switch}>
            <span>A</span>
            <input
              type="checkbox"
              checked={Boolean(inputA)}
              onChange={(event) => setInputA(event.target.checked ? 1 : 0)}
            />
            <span className={styles.thumb} data-active={inputA}></span>
          </label>
          <label className={styles.switch}>
            <span>B</span>
            <input
              type="checkbox"
              checked={Boolean(inputB)}
              onChange={(event) => setInputB(event.target.checked ? 1 : 0)}
            />
            <span className={styles.thumb} data-active={inputB}></span>
          </label>
        </div>
      </div>

      <div className={styles.results}>
        {outputs.map((result) => (
          <div key={result.label} className={styles.resultCard}>
            <header>
              <span>{result.label}</span>
              <strong data-active={result.value}>{result.value}</strong>
            </header>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
