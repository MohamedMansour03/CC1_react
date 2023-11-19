import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import './Contenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../AppContext';
import { Context } from '../ContexeLang';
import FrenchFlag from './assets/france.svg';
import SpanishFlag from './assets/spain.svg';
import EnglishFlag from './assets/united-kingdom.svg';
import data from './assets/data.js';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { isDarkMode } = useContext(AppContext);
  const { lang, setLang } = useContext(Context);
  const itemsPerPage = 5;

  const getUsers = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${itemsPerPage}`
      )
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Une erreur s'est produite :", error));
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const displayUser = () => {
    let tempUser = users;
    if (searchInput !== "") {
      tempUser = tempUser.filter((user) => user.name.includes(searchInput) || user.id.toString().includes(searchInput));
    }
    setUsers(tempUser);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="custom-container container-sm mx-auto my-3">
      <div className="container-langs">
        <img onClick={() => setLang('FR')} src={FrenchFlag} alt="French Flag" />
        <img onClick={() => setLang('EN')} src={EnglishFlag} alt="English Flag" />
        <img onClick={() => setLang('ES')} src={SpanishFlag} alt="Spanish Flag" />
      </div>
      <h1 className={`text-center ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        {data[lang].title}
      </h1>
      <form className="row gx-2">
        <div className="col-sm-12 col-md-6">
          <label className="col-form-label">Search :</label>
          <div className="d-flex">
            <input
              type="text"
              id="search"
              className="form-control"
              onChange={handleSearch}
              value={searchInput}
            />
            <button
              className="btn btn-dark mx-2"
              type="button"
              onClick={displayUser}
            >
              Search
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => {
                setSearchInput('');
                getUsers();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
      <hr />
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between flex-wrap">
        <button onClick={handlePreviousPage} className="btn btn-secondary mb-2">
          Prev
        </button>
        <h5 className="align-self-center mb-2">Page {currentPage}</h5>
        <button onClick={handleNextPage} className="btn btn-secondary mb-2">
          Next
        </button>
      </div>
    </div>
  );
}

export default UsersList;
