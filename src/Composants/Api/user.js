import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const displayUser = () => {
    let tempUser = users; 
    if (searchInput !== "") {
      tempUser = tempUser.filter(
        (user) =>
          user.name.includes(searchInput) ||
          user.id.toString().includes(searchInput)
      );
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
    <div className="container-fluid mx-auto w-75 my-3">
      <h2 className="text-center">Users List</h2>
      <form>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label  className="col-form-label">Search</label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="search"
              className="form-control"
              onChange={handleSearch}
              value={searchInput}
            />
          </div>
          <div className="col-auto">
            <input
              className="btn btn-dark mx-2"
              type="submit"
              value="Search"
              onClick={(e) => {
                e.preventDefault();
                displayUser();
              }}
            />
            <input
              className="btn btn-secondary"
              type="reset"
              value="Reset"
              onClick={() => {
                setSearchInput("");
                getUsers();
              }}
            />
          </div>
        </div>
      </form>
      <hr />
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
      <div className="d-flex justify-content-between">
        <button onClick={handlePreviousPage} className="btn btn-secondary">
          Previous
        </button>
        <h5 className="align-self-center">Page {currentPage}</h5>
        <button onClick={handleNextPage} className="btn btn-secondary">
          Next
        </button>
      </div>
    </div>
  );
}

 

export default UsersList;




/*
 
Dans la bibliothèque Axios, la propriété data de l'objet de réponse
(généralement appelé response) contient les données renvoyées par
 le serveur en réponse à une requête HTTP. Cette propriété est spécifique à Axios 
et est utilisée pour accéder aux données renvoyées par le serveur.


*/
