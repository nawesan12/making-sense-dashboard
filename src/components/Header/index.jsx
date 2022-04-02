import styles from '../../styles/header/Header.module.css';
import ThemeToggler from './ThemeToggler';

export default function Header() {
    return (
        <header className={styles.app_header}>

            <section className={styles.dashboard_title}>
                <h1>Social Media Dashboard</h1>
                <h4>Total followers: 23,004</h4>
            </section>

            <ThemeToggler />
        </header>
    )
}