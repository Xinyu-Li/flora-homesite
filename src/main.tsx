import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import HomePage from './pages/Home';
import TeamPage from './pages/Team';
import PublicationsPage from './pages/Publications';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';
import './styles/globals.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'team', element: <TeamPage /> },
        { path: 'publications', element: <PublicationsPage /> },
        { path: 'news', element: <NewsPage /> },
        { path: 'contact', element: <ContactPage /> },
      ],
    },
  ],
  {
    basename: '/home',
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
