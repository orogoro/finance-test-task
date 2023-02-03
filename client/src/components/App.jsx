import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Container } from './';

const Home = lazy(() => import('../pages/HomePage'));

function App() {
  return (
    <Container>
      <Suspense fallback={'loading...'}>
        <Routes>
          <Route path='/' element={<Home />}>
            {/* <Route path=':itemName' element={<WeedsManual />} /> */}
          </Route>

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
