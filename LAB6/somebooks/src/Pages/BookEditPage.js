
import '../App.css';
import {useForm} from 'react-hook-form';
import {Link, useLocation, useParams} from "react-router-dom";
import ApiQueries from '../Back/Queries';



function BookEditPage() {

  let { id } = useParams()

  function EditBook(book_data) {
    ApiQueries.editBook(id, book_data.name, book_data.writedate);
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => EditBook(data);
  const onError = (errors, e) => console.log(errors, e);

  function DeleteBook() {
    ApiQueries.deleteBook(id)
  }

  function ChangeStatus() {
    ApiQueries.changeStatus(id)
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

      <button type="submit" class="FormButton" onClick={DeleteBook}>Удалить книгу</button>
      <button type="submit" class="FormButton" onClick={ChangeStatus}>Сменить статус</button>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
          <table>
            <tbody>
              <tr>
                <div>Name</div>
                <input {...register("name")} />
              </tr>
              <tr>
                <div>Writedate</div>
                <input {...register("writedate")} />
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
export default BookEditPage;