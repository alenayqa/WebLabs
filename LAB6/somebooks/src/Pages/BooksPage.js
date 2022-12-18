
import '../App.css';
import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";

function BooksPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div>
      <div>
              <Link to={'/'}>Авторы</Link>
              <Link to={'/books'}>Книги</Link>
      </div>

      
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* <input {...register("firstName")} />
        <input {...register("lastName")} /> */}
        <div className='ButtonWrapper'>
          <button type="submit" class="FormButton">Книги</button>
        </div>
      </form>
    </div>

  );
}
export default BooksPage;