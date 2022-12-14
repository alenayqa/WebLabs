
import '../App.css';
import {useForm} from 'react-hook-form';
import { useState } from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import ApiQueries from '../Back/Queries';
import {toast, ToastContainer} from "react-toastify";



function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}


function BookCreatePage() {

  function CreateBook(book_data) {
    ApiQueries.addBook(book_data.name, book_data.writedate, book_data.authors, book_data.lang);
  }


  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => CreateBook(data);
  const onError = (errors, e) => console.log(errors, e);

  const [fname, setFName] = useLocalStorage("fname", "");
  const [fwritedate, setFWritedate] = useLocalStorage("writedate", "");
  const [fauthors, setFAuthors] = useLocalStorage("authors", "");
  const [flang, setFLang] = useLocalStorage("lang", "");

  return (
    <div>
      <div>
              <Link className='LinkButton' to={'/'}>????????????</Link>
              <Link className='LinkButton' to={'/finishedbooks'}>?????????????????????? ??????????</Link>
              <Link className='LinkButton' to={'/planbooks'}>?????????????????????????? ??????????</Link>
              <Link className='LinkButton' to={'/authors/new'}>???????????????? ????????????</Link>
              <Link className='LinkButton' to={'/books/new'}>???????????????? ??????????</Link>
      </div>

      {/* <button type="submit" class="FormButton" onClick={DeleteAuthor}>?????????????? ????????????</button> */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
          <table>
            <tbody>
              <tr>
                <div>Name</div>
                <input defaultValue={fname}
                  {...register("name", {onChange: (e) => setFName(e.target.value)})} required/>
              </tr>
              <tr>
                <div>Writedate</div>
                <input defaultValue={fwritedate} {...register("writedate", {onChange: (e) => setFWritedate(e.target.value)})} required/>
              </tr>
              <tr>
                <div>Authors</div>
                <input defaultValue={fauthors} {...register("authors", {onChange: (e) => setFAuthors(e.target.value)})} required/>
              </tr>
              <tr>
                <div>Language</div>
                <input defaultValue={flang} {...register("lang", {onChange: (e) => setFLang(e.target.value)})} required/>
              </tr>
              <tr>
                <button type="submit" class="FormButton">????????????????</button>                
              </tr>
            </tbody>
          </table>
          <ToastContainer/>



      </form>
      
    </div>

  );
}
export default BookCreatePage;