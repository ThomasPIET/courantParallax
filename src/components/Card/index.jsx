import React from "react";
import styles from "./style.module.scss";
export default function index({title, description, src, link, color}) {
    return (
        <div className={styles.cardContainer}>
           <div style={{backgroundColor: color}} className={styles.card}>
                <h2 className={styles.title}>{title}</h2>

                <p className={styles.description}>{description}</p>

                
                
           </div>
        </div>
    )
}