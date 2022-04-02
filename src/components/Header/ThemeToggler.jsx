import { useState } from 'react'
import styles from '../../styles/header/Header.module.css';

export default function ThemeToggler() {

    const [darkModeActive, setDarkModeActive] = useState(false);

    const toggleDarkMode = () => {
        document.body.classList.toggle('darkMode');
        setDarkModeActive(!darkModeActive);
    }

    return (
        <>
            <span className={styles.theme_toggler} onClick={toggleDarkMode} >
                <p>Dark Theme</p>
                <span className={`${styles.toggler} ${darkModeActive ? styles.toggler_active : {}}`}>
                    <span className={styles.toggler_thumb} />
                </span>
            </span>
        </>
    )
}