import ChangeColor from "./components/changeColor";
import Number from "./components/number";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.div}>
      <ChangeColor />
      <Number />
    </div>
  );
};
