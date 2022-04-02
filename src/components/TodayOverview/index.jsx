import ModalsContainer from '../Containers/ModalsContainer';
import styles from '../../styles/today-overview/TodayOverview.module.css';

import facebook from '../../images/icon-facebook.svg'
import instagram from '../../images/icon-instagram.svg'
import twitter from '../../images/icon-twitter.svg'
import youtube from '../../images/icon-youtube.svg'

import upIcon from '../../images/icon-up.svg'
import downIcon from '../../images/icon-down.svg'

export default function TodayOverview() {
    return(
        <>
            <header>
                <h2>Overview - Today</h2>
            </header>
            <ModalsContainer>
                <article className={styles.overview_modal}>
                    <section className={`${styles.type} ${styles.flex_between}`}>
                        <h4>Page Views</h4>
                        <img src={facebook} alt="" />
                    </section>
                    <section className={`${styles.data} ${styles.flex_between}`}>
                        <p className={styles.number}>87</p>
                        <p className={`${styles.up} ${styles.upcolor}`}>
                            <img src={upIcon} alt="" />
                            <span>3%</span>
                        </p>
                    </section>
                </article>

                <article className={styles.overview_modal}>
                    <section className={`${styles.type} ${styles.flex_between}`}>
                        <h4>Likes</h4>
                        <img src={facebook} alt="" />
                    </section>
                    <section className={`${styles.data} ${styles.flex_between}`}>
                        <p className={styles.number}>52</p>
                        <p className={`${styles.up} ${styles.downcolor}`}>
                            <img src={downIcon} alt="" />
                            <span>2%</span>
                        </p>
                    </section>
                </article>

                <article className={styles.overview_modal}>
                    <section className={`${styles.type} ${styles.flex_between}`}>
                        <h4>Likes</h4>
                        <img src={instagram} alt="" />
                    </section>
                    <section className={`${styles.data} ${styles.flex_between}`}>
                        <p className={styles.number}>5462</p>
                        <p className={`${styles.up} ${styles.upcolor}`}>
                            <img src={upIcon} alt="" />
                            <span>2257%</span>
                        </p>
                    </section>
                </article>

                <article className={styles.overview_modal}>
                    <section className={`${styles.type} ${styles.flex_between}`}>
                        <h4>Profile Views</h4>
                        <img src={instagram} alt="" />
                    </section>
                    <section className={`${styles.data} ${styles.flex_between}`}>
                        <p className={styles.number}>52k</p>
                        <p className={`${styles.up} ${styles.upcolor}`}>
                            <img src={upIcon} alt="" />
                            <span>1375%</span>
                        </p>
                    </section>
                </article>

                <article className={styles.overview_modal}>
                    <section className={`${styles.type} ${styles.flex_between}`}>
                        <h4>Retweets</h4>
                        <img src={twitter} alt="" />
                    </section>
                    <section className={`${styles.data} ${styles.flex_between}`}>
                        <p className={styles.number}>117</p>
                        <p className={`${styles.up} ${styles.upcolor}`}>
                            <img src={upIcon} alt="" />
                            <span>303%</span>
                        </p>
                    </section>
                </article>

                <article className={styles.overview_modal}>
                    <section className={`${styles.type} ${styles.flex_between}`}>
                        <h4>Likes</h4>
                        <img src={twitter} alt="" />
                    </section>
                    <section className={`${styles.data} ${styles.flex_between}`}>
                        <p className={styles.number}>507</p>
                        <p className={`${styles.up} ${styles.upcolor}`}>
                            <img src={upIcon} alt="" />
                            <span>553%</span>
                        </p>
                    </section>
                </article>

                <article className={styles.overview_modal}>
                    <section className={`${styles.type} ${styles.flex_between}`}>
                        <h4>Likes</h4>
                        <img src={youtube} alt="" />
                    </section>
                    <section className={`${styles.data} ${styles.flex_between}`}>
                        <p className={styles.number}>107</p>
                        <p className={`${styles.up} ${styles.downcolor}`}>
                            <img src={downIcon} alt="" />
                            <span>19%</span>
                        </p>
                    </section>
                </article>

                <article className={styles.overview_modal}>
                    <section className={`${styles.type} ${styles.flex_between}`}>
                        <h4>Total Views</h4>
                        <img src={youtube} alt="" />
                    </section>
                    <section className={`${styles.data} ${styles.flex_between}`}>
                        <p className={styles.number}>1407</p>
                        <p className={`${styles.up} ${styles.downcolor}`}>
                            <img src={downIcon} alt="" />
                            <span>12%</span>
                        </p>
                    </section>
                </article>
            </ModalsContainer>
        </>
    )
}