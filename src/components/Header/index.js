import Link from "next/link";
import { FaHome, FaGamepad, FaEnvelope,FaInfoCircle } from "react-icons/fa";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.lista}>
          <li>
            <Link href="/" className={styles.link}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link href="/jogos" className={styles.link}>
              <FaGamepad /> Jogos
            </Link>
          </li>
          <li>
            <Link href="/contato" className={styles.link}>
              <FaEnvelope /> Contato
            </Link>
          </li>
          <li>
            <Link href="/sobre" className={styles.link}>
              <FaInfoCircle /> Sobre
             </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;