import { InputTogglePanel } from "./components/InputTogglePanel";
import { LogicGateCard } from "./components/LogicGateCard";
import { ProteusSteps } from "./components/ProteusSteps";
import { TruthTable, TruthTableRow } from "./components/TruthTable";
import styles from "./page.module.css";

const AND_TABLE: TruthTableRow[] = [
  { inputs: { A: 0, B: 0 }, outputs: { Q: 0 } },
  { inputs: { A: 0, B: 1 }, outputs: { Q: 0 } },
  { inputs: { A: 1, B: 0 }, outputs: { Q: 0 } },
  { inputs: { A: 1, B: 1 }, outputs: { Q: 1 } }
];

const OR_TABLE: TruthTableRow[] = [
  { inputs: { A: 0, B: 0 }, outputs: { Q: 0 } },
  { inputs: { A: 0, B: 1 }, outputs: { Q: 1 } },
  { inputs: { A: 1, B: 0 }, outputs: { Q: 1 } },
  { inputs: { A: 1, B: 1 }, outputs: { Q: 1 } }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div>
          <h1>Portes logiques AND &amp; OR — Simulation Proteus 8</h1>
          <p>
            Révisez les fondamentaux des portes logiques ET (AND) et OU (OR), testez
            les entrées en direct et suivez un guide précis pour reproduire le montage
            dans Proteus 8 Professional.
          </p>
        </div>
        <div className={styles.heroBadge}>
          <span>Proteus 8</span>
          <strong>Circuit Tutor</strong>
        </div>
      </section>

      <InputTogglePanel />

      <section className={styles.cards}>
        <LogicGateCard
          title="Porte AND (ET)"
          symbol="·"
          highlight="Nécessite A = 1 ET B = 1"
          description="La porte AND ne produit un niveau logique haut que lorsque toutes ses entrées sont hautes. Dans les circuits intégrés TTL et CMOS (74HC08, 4081), elle est utilisée pour détecter la coïncidence de deux conditions."
          footer={
            <>
              <strong>Utilisations courantes</strong>
              <span>Validation simultanée de capteurs, autorisations combinées, synchronisation.</span>
              <strong>IC recommandé</strong>
              <span>Texas Instruments 74HC08N — quadruple porte AND à 2 entrées.</span>
            </>
          }
        >
          <TruthTable rows={AND_TABLE} inputOrder={["A", "B"]} outputOrder={["Q"]} />
        </LogicGateCard>

        <LogicGateCard
          title="Porte OR (OU)"
          symbol="+"
          highlight="Sortie à 1 si A = 1 ou B = 1"
          description="La porte OR délivre un niveau haut lorsqu&apos;au moins une de ses entrées est haute. Le circuit intégré 74HC32 propose quatre portes OR indépendantes et s&apos;emploie pour gérer des signaux d&apos;alerte ou des commandes alternatives."
          footer={
            <>
              <strong>Utilisations courantes</strong>
              <span>Détection d&apos;événements multiples, télécommandes, sécurités redondantes.</span>
              <strong>IC recommandé</strong>
              <span>Nexperia 74HC32D — quadruple porte OR à 2 entrées.</span>
            </>
          }
        >
          <TruthTable rows={OR_TABLE} inputOrder={["A", "B"]} outputOrder={["Q"]} />
        </LogicGateCard>
      </section>

      <section className={styles.resources}>
        <h2>Rappels rapides</h2>
        <div className={styles.resourceGrid}>
          <article>
            <h3>Symboles normalisés</h3>
            <p>
              Les normes IEC utilisent des symboles arrondis pour les portes logiques.
              Dans Proteus, vous trouverez les symboles ANSI (forme en D). Les deux
              représentent la même fonction.
            </p>
          </article>
          <article>
            <h3>Niveaux logiques</h3>
            <p>
              Les circuits 74HC fonctionnent avec VCC = 2&nbsp;V à 6&nbsp;V. Pour une
              simulation réaliste, fixez VCC à 5&nbsp;V et reliez toutes les masses.
            </p>
          </article>
          <article>
            <h3>Simulation fiable</h3>
            <p>
              Activez la simulation digitale pure (`Digital Transient`) pour obtenir des
              résultats rapides sans les temps de propagation analogiques.
            </p>
          </article>
        </div>
      </section>

      <ProteusSteps />
    </main>
  );
}
