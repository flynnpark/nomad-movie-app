import { createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import Home from './pages/Home/index.tsx';
import { loader as homeLoader } from './pages/Home/loader.ts';
import MovieDetail from './pages/MovieDetail/index.tsx';
import { loader as movieDetailLoader } from './pages/MovieDetail/loader.ts';
import { queryClient } from './utils/queryClient.ts';

const router = createBrowserRouter(
  [
    {
      children: [
        {
          children: [
            {
              element: <MovieDetail />,
              loader: movieDetailLoader(queryClient),
              path: 'movies/:movieId',
            },
          ],
          element: <Home />,
          loader: homeLoader(queryClient),
          path: '',
        },
      ],
      element: <App />,
      path: '/',
    },
  ],
  {
    basename: '/nomad-movie-app',
  }
);

export default router;
