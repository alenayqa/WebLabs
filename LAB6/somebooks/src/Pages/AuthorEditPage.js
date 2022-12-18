
import '../App.css';
import {useForm} from 'react-hook-form';
import {Link, useLocation, useParams} from "react-router-dom";

function AuthorEditPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);
  let { id } = useParams()
  console.log(id)
  return (
    <div>
      <div>
              <Link to={'/'}>Авторы</Link>
              <Link to={'/finishedbooks'}>Прочитанные книги</Link>
              <Link to={'/planbooks'}>Непрочитанные книги</Link>
      </div>

      
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* <input {...register("firstName")} />
        <input {...register("lastName")} /> */}
        <div className='ButtonWrapper'>
          <button type="submit" class="FormButton">Edit author</button>
        </div>
      </form>
    </div>

  );
}
export default AuthorEditPage;