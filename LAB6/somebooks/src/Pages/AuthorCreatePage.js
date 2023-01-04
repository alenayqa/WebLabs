
import '../App.css';
import {useForm} from 'react-hook-form';
import {Link, useLocation, useParams} from "react-router-dom";
import { useState } from "react";
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

function AuthorCreatePage() {

  function CreateAuthor(author_data) {
    ApiQueries.addAuthor(author_data.name, author_data.birthdate, author_data.biography, author_data.langs);
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => CreateAuthor(data);
  const onError = (errors, e) => console.log(errors, e);

  const [gname, setGName] = useLocalStorage("gname", "");
  const [gbirthdate, setGBirthdate] = useLocalStorage("birthdate", "");
  const [gbiography, setGBiography] = useLocalStorage("biography", "");
  const [glangs, setGLangs] = useLocalStorage("langs", "");

  return (
    <div>
      <div>
              <Link className='LinkButton' to={'/'}>Авторы</Link>
              <Link className='LinkButton' to={'/finishedbooks'}>Прочитанные книги</Link>
              <Link className='LinkButton' to={'/planbooks'}>Непрочитанные книги</Link>
              <Link className='LinkButton' to={'/authors/new'}>Добавить автора</Link>
              <Link className='LinkButton' to={'/books/new'}>Добавить книгу</Link>
      </div>

      {/* <button type="submit" class="FormButton" onClick={DeleteAuthor}>Удалить автора</button> */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
          <table>
            <tbody>
              <tr>
                <div>Name</div>
                <input defaultValue={gname} {...register("name", {onChange: (e) => setGName(e.target.value)})} required/>
              </tr>
              <tr>
                <div>Birthdate</div>
                <input defaultValue={gbirthdate} type="date" {...register("birthdate", {onChange: (e) => setGBirthdate(e.target.value)})}/>
              </tr>
              <tr>
                <div>Biography</div>
                <input defaultValue={gbiography} {...register("biography", {onChange: (e) => setGBiography(e.target.value)})} required/>
              </tr>
              <tr>
                <div>Languages</div>
                <input defaultValue={glangs} {...register("langs", {onChange: (e) => setGLangs(e.target.value)})} required/>
              </tr>
              <tr>
                <button type="submit" class="FormButton">Добавить</button>                
              </tr>
            </tbody>
          </table>
        <ToastContainer/>


      </form>
      
    </div>

  );
}
export default AuthorCreatePage;