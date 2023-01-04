
import '../App.css';
import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";
import ApiQueries from '../Back/Queries';
import {useState, useEffect} from "react";


function FinishedBooksPage() {
  const [finishedbooks, setFinishedbooks] = useState([])
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);


  async function loadFinishedbooks() {
    const response = ApiQueries.getFinishedbooks();
    setFinishedbooks([...finishedbooks, ...(await response).data])
  }

  useEffect(() => {
    loadFinishedbooks()
}, [])

  return (
    <div>
      <div>
              <Link className='LinkButton' to={'/'}>Авторы</Link>
              <Link className='LinkButton' to={'/finishedbooks'}>Прочитанные книги</Link>
              <Link className='LinkButton' to={'/planbooks'}>Непрочитанные книги</Link>
              <Link className='LinkButton' to={'/authors/new'}>Добавить автора</Link>
              <Link className='LinkButton' to={'/books/new'}>Добавить книгу</Link>
      </div>

      
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Writedate</th>
        </tr>
      </thead>
      <tbody>
        {finishedbooks.map(x => (
          <tr>
            <td>{x["name"]}</td>
            <td>{x["writedate"]}</td>
            <Link to={'/books/' + x["id"]}>Изменить</Link>
          </tr>
        ))}

      </tbody>
    </table>
    </div>

  );
}
export default FinishedBooksPage;