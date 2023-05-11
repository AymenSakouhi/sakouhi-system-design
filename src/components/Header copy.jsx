import styles from "./Header.module.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
      <h2 className={styles.text}>Your Text Here example example example</h2>
    </header>
  );
};

export default Header;
