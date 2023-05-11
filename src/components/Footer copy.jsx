import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Like Reply. All rights reserved.</p>
      {/* Additional footer content */}
    </footer>
  );
};

export default Footer;
