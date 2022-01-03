import "./styles.css";
import React, { useState } from "react";
import UserTable from "./UserTable.js";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm.js";

export default function App() {
  const usersData = [
    { id: 1, name: "Jeff", username: "jeffffffffff" },
    { id: 2, name: "Joe", username: "joeeeeeeeeeeeee" },
    { id: 3, name: "Bill", username: "billenium" }
  ];

  const [users, setUsers] = useState(usersData);

  // state for if Edit Mode is enabled
  const [editing, setEditing] = useState(false);

  // default user info (empty)
  const initialFormState = { id: null, name: "", username: "" };
  // set default currentUser state to initialFormState
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    // spread operator (adds prev array and new user item to the end)
    setUsers([...users, user]);
  };

  // takes ID of user and filters it out of the user array
  // -passed through props to UserTable
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    // using ternary operator to map through users and find which we want to update
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>Hook CRUD App Test</h1>
      <div className="flexRow">
        {editing ? (
          <div className="flexLarge">
            <h2>Edit User</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div className="flexLarge">
            <h2>Add User</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
        <div className="flexTable">
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}
