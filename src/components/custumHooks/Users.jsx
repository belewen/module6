import React, { useEffect, useState } from "react";
import TableUsers from "./TableUsers";
import { useFetch } from "./useFetch";

function Users() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const [users, isLoading] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  useEffect(() => {
    if (search !== "") {
      const resultSearch = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      setResult(resultSearch);
    } else {
      setResult([...users]);
    }
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <h1>Custum hook : Liste des utilisateurs</h1>
      <p>Une liste d'utilisateur s'affichera . Exemple : Ervin ou Patricia</p>
      <p>usDebugValue est utilisé avec le hook useFetch</p>
      <input
        type="text"
        placeholder="chercher par nom"
        onChange={handleChange}
      ></input>

      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <TableUsers dataArray={result}></TableUsers>
      )}
    </>
  );
}

export default Users;
