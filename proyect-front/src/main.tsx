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




const router = createBrowserRouter([
  { 
    path: '/wallet',
    element: <Wallet/>
  },
  { 
    path: '/loan', 
    element: <Loan/> 
  },
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
