import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Live from './pages/Live';
import CityPlay from './pages/CityPlay';
import Gaming from './pages/Gaming';
import Admin from './pages/admin/Admin';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Posts from './pages/admin/Posts';
import Announcements from './pages/admin/Announcements';
import AdminUsers from './pages/admin/AdminUsers';
import Announcement from './pages/Announcement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'live',
        element: <Live />
      },
      {
        path: 'city-play',
        element: <CityPlay />
      },
      {
        path: 'gaming',
        element: <Gaming />
      },
      {
        path: 'admin',
        element: <Admin />,
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: 'posts',
            element: <Posts />
          },
          {
            path: 'announcements',
            element: <Announcements />
          },
          {
            path: 'users',
            element: <AdminUsers />
          }
        ]
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'announcement',
        element: <Announcement />
      }
    ]
  }
]);

export default router;