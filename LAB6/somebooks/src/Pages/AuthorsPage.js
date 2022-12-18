
import '../App.css';
import {useState, useEffect} from "react";
import {Link, NavLink, useLoaderData} from "react-router-dom";
import ApiQueries from '../Back/Queries';




const AuthorsPage = () => {
  const [authors, setAuthors] = useState([])

  const users = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Max', username: 'maxfarseer' },
  ]

  // const au = ApiQueries.getAllAuthors().data

  async function loadAuthors() {
    const response = ApiQueries.getAllAuthors();
    setAuthors([...authors, ...(await response).data])
  }

  useEffect(() => {
    loadAuthors()
}, [])

  return (
    <div>
      <div>
              <Link to={'/'}>Авторы</Link>
              <Link to={'/finishedbooks'}>Прочитанные книги</Link>
              <Link to={'/planbooks'}>Непрочитанные книги</Link>
      </div>

      
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Biography</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(x => (
          <tr>
            <td>{x["id"]}</td>
            <td>{x["name"]}</td>
            <td>{x["biography"]}</td>
            <Link to={'/authors/' + x["id"]}>Изменить</Link>
          </tr>
        ))}

      </tbody>
    </table>
    </div>

  );
}
export default AuthorsPage;