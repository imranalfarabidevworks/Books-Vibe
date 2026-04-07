import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../outlet/Layout/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import BooksPage from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <BooksPage />,
      },
        {
    path: "/bookDetails/:bookId",
    element: <BookDetails />,
    loader:()=> fetch('/booksData.json'),
  }
    ],
    
    errorElement: <ErrorPage />,
  },

]);

