import React from 'react';
import styles from './persons-work.module.css';

export default ({ works }) => (
    <table className={styles.works}>
        <tbody>
            {works.map( obj => (
                <tr className={styles.worksTh} key={`tr-${obj.date.toString()}`}>
                    <th className={styles.worksTd}>{obj.date}</th>
                    <th className={styles.worksTd}>{obj.title}</th>
                </tr>
            ))}
        </tbody>
    </table>
  );