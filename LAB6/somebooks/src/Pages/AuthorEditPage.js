
import '../App.css';
import {useForm} from 'react-hook-form';
import {Link, useLocation, useParams} from "react-router-dom";
import ApiQueries from '../Back/Queries';



function AuthorEditPage() {

  let { id } = useParams()

  function EditAuthor(author_data) {
    ApiQueries.editAuthor(id, author_data.name, author_data.biography);
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => EditAuthor(data);
  const onError = (errors, e) => console.log(errors, e);

  function DeleteAuthor() {
    ApiQueries.deleteAuthor(id)
  }


  return (
    <div>
      <div>
              <Link className='LinkButton' to={'/'}>Авторы</Link>
              <Link className='LinkButton' to={'/finishedbooks'}>Прочитанные книги</Link>
              <Link className='LinkButton' to={'/planbooks'}>Непрочитанные книги</Link>
              <Link className='LinkButton' to={'/authors/new'}>Добавить автора</Link>
              <Link className='LinkButton' to={'/books/new'}>Добавить книгу</Link>
      </div>

      <button type="submit" class="FormButton" onClick={DeleteAuthor}>Удалить автора</button>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
          <table>
            <tbody>
              <tr>
                <div>Name</div>
                <input {...register("name")} />
              </tr>
              <tr>
                <div>Biography</div>
                <input {...register("biography")} />
              </tr>
              <tr>
                <button type="submit" class="FormButton">Подтвердить изменения</button>                
              </tr>
            </tbody>
          </table>



      </form>
      
    </div>

  );
}
export default AuthorEditPage;