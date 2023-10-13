import React from "react";

function TableUsers({ dataArray }) {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Nom</th>
          <th>Nom d'utilisateur</th>
          <th>Ville</th>
        </tr>
      </thead>
      {dataArray.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.address.city}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default TableUsers;
