import { useEffect, useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { socket } from '../../API/APIpriceTickers';

import { Tickers } from '../';

function Home() {
  const [tickers, SetTickers] = useState([]);

  useEffect(() => {
    socket.on('ticker', (ticker) => SetTickers(ticker));
  }, []);

  return (
    <div>
      <Tickers tickers={tickers} />
      <Suspense fallback={'loading...'}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Home;
