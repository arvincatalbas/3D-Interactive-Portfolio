import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { Certificates } from '../pages/Certificates';
import { Resume } from '../pages/Resume';
import { Github } from '../pages/Github';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'certificates',
        element: <Certificates />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'github',
        element: <Github />,
      },
    ],
  },
]);
