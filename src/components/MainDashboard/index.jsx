import { useState } from 'react'
import styles from '../../styles/main-dashboard/MainDashboard.module.css'
import data from './data.json'

import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import instagram from '../../images/icon-instagram.svg'
import youtube from '../../images/icon-youtube.svg'
import upIcon from '../../images/icon-up.svg'
import ModalsContainer from '../Containers/ModalsContainer'
import Modal from './Modal'

export default function MainDashboard() {

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
        <ModalsContainer>
            <article className={styles.modal} onClick={toggleModal}>
                <div className={`${styles.app_line} ${styles.facebook}`} />
                <section className={styles.content}>
                    <span className={styles.social_app}>
                        <img src={facebook} alt=""/> {data[0].username}
                    </span>
                    <p className={styles.followers}>
                        <h4>{data[0].followers}</h4>
                        <span>Followers</span>
                    </p>
                    <p className={styles.up_today}>
                        <img src={upIcon} alt="" /> <span>{data[0].upToday}</span> Today
                    </p>
                </section>
            </article>
            <article className={styles.modal} onClick={toggleModal}>
                <div className={`${styles.app_line} ${styles.twitter}`} />
                <section className={styles.content}>
                    <span className={styles.social_app}>
                        <img src={twitter} alt=""/> {data[1].username}
                    </span>
                    <p className={styles.followers}>
                        <h4>{data[1].followers}</h4>
                        <span>Followers</span>
                    </p>
                    <p className={styles.up_today}>
                        <img src={upIcon} alt="" /> <span>{data[1].upToday}</span> Today
                    </p>
                </section>
            </article>
            <article className={styles.modal} onClick={toggleModal}>
                <div className={`${styles.app_line} ${styles.instagram}`} />
                <section className={styles.content}>
                    <span className={styles.social_app}>
                        <img src={instagram} alt=""/> {data[2].username}
                    </span>
                    <p className={styles.followers}>
                        <h4>{data[2].followers}</h4>
                        <span>Followers</span>
                    </p>
                    <p className={styles.up_today}>
                        <img src={upIcon} alt="" /> <span>{data[2].upToday}</span> Today
                    </p>
                </section>
            </article>
            <article className={styles.modal} onClick={toggleModal}>
                <div className={`${styles.app_line} ${styles.youtube}`} />
                <section className={styles.content}>
                    <span className={styles.social_app}>
                        <img src={youtube} alt=""/> {data[3].username}
                    </span>
                    <p className={styles.followers}>
                        <h4>{data[3].followers}</h4>
                        <span>Subscribers</span>
                    </p>
                    <p className={styles.up_today}>
                        <img src={upIcon} alt="" /> <span>{data[3].upToday}</span> Today
                    </p>
                </section>
            </article>
        </ModalsContainer>

        <Modal closeModal={() => setShowModal(false)} showModal={showModal} />
        </>
    )
}