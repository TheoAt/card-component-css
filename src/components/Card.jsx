import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    
    return (
        <section className={styles.card}>
            <div className={styles.album_info}>
                <img src={props.image} alt={props.name} />
                <div className={styles.info}>
                    <h1>{props.artist}</h1>
                    <div>
                        <p>{props.name}</p>
                        <p>({props.year})</p>
                    </div>
                </div>
            </div>
            <div className={styles.rating}>
                <p>Rate this album</p>
                <div className={styles.stars}>
                    <span className={styles.star}>&#9734;</span>
                    <span className={styles.star}>&#9734;</span>
                    <span className={styles.star}>&#9734;</span>
                    <span className={styles.star}>&#9734;</span>
                    <span className={styles.star}>&#9734;</span>
                </div>
            </div>
        </section>
    );
};

export default Card;