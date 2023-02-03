import { useEffect, useState } from 'react';

import { socket } from '../API/APIpriceTickers';

import { Container } from './';

function App() {
  const [tikers, SetTikers] = useState([]);
  console.log(tikers);

  useEffect(() => {
    socket.on('ticker', (ticker) => SetTikers(ticker));
  }, []);

  return (
    <div>
      <Container />
    </div>
  );
}

export default App;
