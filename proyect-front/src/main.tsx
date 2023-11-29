import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wallet  from './routes/wallets.tsx';
import Loan  from './routes/Loans.tsx';
import { AuthProvider } from './auth/AuthProvider.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute.tsx';
import Dashboard from './routes/Dashboard.tsx';
import Login from './routes/Login.tsx';
import Client from './routes/Clients.tsx';




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
      path: "/dashboard",
      element: <Dashboard />,
      },
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
      }
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
