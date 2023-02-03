import { TickersItem } from '../';

import styles from './Tickers.module.css';

function Tickers({ tickers }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {tickers.map((item) => (
          <TickersItem key={item.ticker} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Tickers;
