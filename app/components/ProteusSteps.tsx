import styles from "./ProteusSteps.module.css";

const steps = [
  {
    title: "Créer un nouveau projet",
    details: [
      "Ouvrez Proteus 8 et lancez le projet ISIS → New Project Wizard.",
      "Nom du projet : `logic_gates_demo`, choisissez un dossier vide.",
      "Sélectionnez le gabarit Schematic capture et laissez les autres options par défaut."
    ]
  },
  {
    title: "Ajouter les composants",
    details: [
      "Cliquez sur `P` pour ouvrir la bibliothèque → recherchez et ajoutez les composants `Logic AND Gate` (74HC08) et `Logic OR Gate` (74HC32).",
      "Ajoutez deux interrupteurs (`SPST Switch`) pour les entrées A et B et une alimentation digitale VCC +5V.",
      "Placez deux indicateurs de sortie : LED rouge pour l'AND, LED verte pour l'OR. Ajoutez des résistances de 220 Ω en série."
    ]
  },
  {
    title: "Câbler le schéma",
    details: [
      "Reliez les interrupteurs aux entrées A et B des deux circuits intégrés.",
      "Connectez les sorties des portes aux LED correspondantes avec leurs résistances.",
      "N'oubliez pas d'alimenter le VCC et GND des circuits intégrés 74HC08 et 74HC32."
    ]
  },
  {
    title: "Configuer l'instrumentation",
    details: [
      "Ajoutez un `Digital Logic Analyzer` ou des `Virtual Terminals` si vous souhaitez visualiser les niveaux logiques.",
      "Configurez les interrupteurs en mode `Digital` pour qu'ils fournissent un 0 ou 1 logique.",
      "Activez l'animation `Logic` pour profiter de la simulation rapide dans Proteus."
    ]
  },
  {
    title: "Lancer la simulation",
    details: [
      "Cliquez sur le bouton `Play` pour démarrer la simulation.",
      "Basculez les interrupteurs A et B et observez l'état des LED et l'analyseur logique.",
      "Vérifiez que la LED AND ne s'allume que lorsque A = 1 et B = 1, tandis que la LED OR s'allume pour toute combinaison avec au moins un 1."
    ]
  }
];

export function ProteusSteps() {
  return (
    <section className={styles.wrapper}>
      <h2>Étapes détaillées pour Proteus 8</h2>
      <p>
        Utilisez ce guide pas à pas pour recréer le circuit AND / OR dans Proteus 8
        Professional.
      </p>
      <ol className={styles.stepList}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <header className={styles.stepHeader}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
            </header>
            <ul className={styles.detailList}>
              {step.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
