import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>Home</li>
        <li className={styles.li}>About</li>
        <li className={styles.li}>Contact</li>
      </ul>
    </nav>
  );
}
