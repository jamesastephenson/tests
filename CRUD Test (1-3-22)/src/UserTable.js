import React from "react";

export default function UserTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapping through array of user objects, outputting props to table cels */}
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="button mutedButton"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    props.deleteUser(user.id);
                  }}
                  className="button mutedButton"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
