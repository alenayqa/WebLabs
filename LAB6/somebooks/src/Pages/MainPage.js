
import '../App.css';
import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";

function MainPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* <input {...register("firstName")} />
        <input {...register("lastName")} /> */}
        <div className='ButtonWrapper'>
          <button type="submit" class="FormButton">Авторы</button>
          <button type="submit" class="FormButton">Книги</button>
        </div>
      </form>
    </div>
  );
}
export default MainPage;