import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import { Article } from './components/commons';

function App() {
  return (
    <>
      <Header />
      <Article>
        <Outlet />
      </Article>
    </>
  );
}

export default App;
