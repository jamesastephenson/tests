import React, { useState } from "react";

export default function AddUserForm(props) {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  // update state within the form
  // event always gets passed through any "on" event in the DOM
  const handleInputChange = (event) => {
    // object destructuring lets us get the name (key) and value from the form
    const { name, value } = event.target;
    // set user dynamically with computed property names
    setUser({ ...user, [name]: value });
  };

  // the form must be submitted to the App component
  // -we passed down the function with props, so we use props to access it
  // -we write an onSubmit funciton to prevent default behavior or blank values
  // -also use a setter to reset the form to its initial value after submission
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button className="button">Add new user</button>
    </form>
  );
}
