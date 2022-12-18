import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthorsPage from './Pages/AuthorsPage';
import BooksPage from './Pages/BooksPage';
import MainPage from './Pages/MainPage'
import ApiQueries from './Back/Queries';

const usersData = [
  { id: 1, name: 'Tania', username: 'floppydiskette' },
  { id: 2, name: 'Max', username: 'maxfarseer' },
]

const resp = ApiQueries.getAllAuthors().data
console.log(usersData);

// Create router
// https://reactrouter.com/en/main/routers/create-browser-router
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthorsPage/>,
  },
  {
    path: "/books",
    element: <BooksPage/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
