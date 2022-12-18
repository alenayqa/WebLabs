import logo from './logo.svg';
import './App.css';
import {useForm} from 'react-hook-form';
import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthorsPage from './Pages/AuthorsPage';
import BooksPage from './Pages/BooksPage';
import { ToastContainer, toast } from 'react-toastify';
import React, {useState, useEffect, useRef, createContext} from "react";

function sayHello() {
  alert('You clicked me!');
}


function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <div className='ButtonWrapper'>
        <button type="submit" class="FormButton">Авторы</button>
        <button type="submit" class="FormButton">Книги</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/authors" component={AuthorsPage}/>
        </Routes>
      </BrowserRouter>
    </form>
  );
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
