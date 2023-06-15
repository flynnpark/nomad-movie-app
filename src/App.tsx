import { Outlet } from 'react-router-dom';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <article>
        <Outlet />
      </article>
    </>
  );
}

export default App;
