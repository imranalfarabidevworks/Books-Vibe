import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import {router} from './routes/Routes'; // রাউটার ইম্পোর্ট করা
import { RouterProvider} from 'react-router-dom';
import BookProvider from './context/BookProvider';
import { ToastContainer } from 'react-toastify';

// রুট এলিমেন্ট সিলেক্ট করে রেন্ডার করা
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
 <RouterProvider router={router} />
  <ToastContainer />
    </BookProvider>
   
  </StrictMode>,
)