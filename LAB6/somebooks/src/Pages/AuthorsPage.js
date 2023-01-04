
import '../App.css';
import {useState, useEffect} from "react";
import {Link, NavLink, useLoaderData} from "react-router-dom";
import ApiQueries from '../Back/Queries';
import QRCode from "react-qr-code";




const AuthorsPage = () => {
  const [authors, setAuthors] = useState([])


  async function loadAuthors() {
    const response = ApiQueries.getAllAuthors();
    setAuthors([...authors, ...(await response).data])
  }

  useEffect(() => {
    loadAuthors()
}, [])

  const regexprstr = /^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*$/;
  const regexpr = new RegExp(regexprstr);

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
          <th>Biography</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(x => (
          <tr>
            <td>{x["name"]}</td>
            {x["biography"].match(regexpr) ? <QRCode value={x["biography"]}/> : <td>{x["biography"]}</td>}
            <Link to={'/authors/' + x["id"]}>Изменить</Link>
          </tr>
        ))}

      </tbody>
    </table>
    </div>

  );
}
export default AuthorsPage;