import React from 'react';
import styles from './persons-work.module.css';

export default ({ works }) => (
    <div>
        <table className={styles.works}>
            {works.map( obj => (
                <tr className={styles.worksTh}>
                    <th className={styles.worksTd}>{obj.date}</th>
                    <th className={styles.worksTd}>{obj.title}</th>
                </tr>
            ))}
        </table>
    </div>
  );