import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wallet  from './routes/wallets.tsx';
import Loan  from './routes/Loans.tsx';
import { AuthProvider } from './auth/AuthProvider.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute.tsx';
import Login from './routes/Login.tsx';
import Client from './routes/Clients.tsx';
import Signup from './componentes/Modal_Signup.tsx';
import Dashboard from './routes/Dashboard.tsx';
import Users from './routes/Users.tsx';




const router = createBrowserRouter([

  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [

      { 
        path: '/wallet',
        element: <Wallet/>
      },
      { 
        path: '/client',
        element: <Client/>
      },
      { 
        path: '/loan', 
        element: <Loan/> 
      },
      {
        path: "/users",
        element: <Users />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
          },
    ]

  }

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
