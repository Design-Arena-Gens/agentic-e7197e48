"use client";

import styles from "./TruthTable.module.css";

export type TruthTableRow = {
  inputs: Record<string, 0 | 1>;
  outputs: Record<string, 0 | 1>;
};

interface TruthTableProps {
  rows: TruthTableRow[];
  inputOrder: string[];
  outputOrder: string[];
}

export function TruthTable({ rows, inputOrder, outputOrder }: TruthTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {inputOrder.map((label) => (
              <th key={label}>{label}</th>
            ))}
            {outputOrder.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {inputOrder.map((label) => (
                <td key={`in-${label}-${idx}`}>{row.inputs[label]}</td>
              ))}
              {outputOrder.map((label) => (
                <td key={`out-${label}-${idx}`}>{row.outputs[label]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
