import { useEffect, useRef } from 'react';

import toTop from '../../images/top.png';

import styles from './TickersItem.module.css';

function TickersItem({ item }) {
  const { ticker, change_percent, change, price } = item;
  const refChangePercent = useRef(null);
  const refChange = useRef(null);
  //   console.log(change_percent, 'change_percent');
  //   console.log(refChangePercent.current, 'refChangePercent.current');

  useEffect(() => {
    if (change_percent !== refChangePercent.current) {
      refChangePercent.current = change_percent;
    }
    if (change !== refChange.current) {
      refChange.current = change;
    }
  }, [change, change_percent]);

  return (
    <div className={styles.container}>
      <div className={styles.divCorectionStyles}>
        <div
          className={`${styles.containerImage} ${
            change_percent > refChangePercent.current
              ? styles.topImg
              : styles.downImg
          }`}
        >
          <img className={styles.image} src={toTop} alt='toTop' />
        </div>

        <div className={styles.containerTitle}>
          <h1 className={styles.title}>{ticker}</h1>
          <div className={`${styles.divContainer}`}>
            <p className={`${styles.text}`}>{price}</p>
          </div>
        </div>
      </div>

      <div className={styles.containerChange}>
        <div className={`${styles.divContainer}`}>
          <p
            className={`${styles.text} ${
              change_percent > refChangePercent.current
                ? styles.top
                : styles.down
            } ${
              change_percent !== refChangePercent.current && styles.animanion
            } `}
          >
            {change_percent > refChangePercent.current ? '+' : '-'}
            {change_percent} %
          </p>
        </div>
        <div className={`${styles.divContainer}`}>
          <p
            className={`${styles.text} ${
              change > refChange.current ? styles.top : styles.down
            }`}
          >
            {change > refChange.current ? '+' : '-'}
            {change}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TickersItem;
