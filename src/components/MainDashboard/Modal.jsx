import styles from '../../styles/main-dashboard/MainDashboard.module.css'
import facebook from '../../images/icon-facebook.svg'
import upIcon from '../../images/icon-up.svg'

export default function Modal(props) {
    return (
        <section className={props.showModal === true ? styles.chart_modal_container : styles.hidden}>
            <article className={styles.chart_modal}>
                <header>
                    <span onClick={props.closeModal} className={styles.close_modal}>X</span>
                    <h2>Facebook Followers</h2>
                    <p><img src={facebook} alt="" /> @nathanf</p>
                    <section className={styles.numbers}>
                        <div className={styles.statistic}>
                            <h3>1987</h3>
                            <span>Total <br /> followers</span>
                        </div>
                        <div className={styles.statistic}>
                            <h3 className={styles.greenie}>
                                <img src={upIcon} alt="" /> 
                                81
                            </h3>
                            <span>New followers in <br /> the past 10 days</span>
                        </div>
                        <div className={styles.statistic}>
                            <h3 className={styles.greenie}>
                                <img src={upIcon} alt="" /> 
                                12
                            </h3>
                            <span>New followers <br /> TODAY</span>
                        </div>
                    </section>
                </header>
                <section className={styles.chart_section}>
                    <div className={styles.chart_skeleton}></div>
                </section>
            </article>
        </section>
    )
}