import React, { useContext, useState } from "react";
import { GlobalContext } from "./context/global";

function CreateAccount() {
  const { user, setUser } = useContext(GlobalContext);

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [createdSuccessfully, setCreatedSuccessfully] = useState(false);
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.password.length < 8) {
      setErrors("Password must be 8 or more characters long");
    } else if (input.email === "") {
      setErrors("Email is Required");
    } else if (input.name === "") {
      setErrors("Name is Required");
    } else {
      setUser({
        name: input.name,
        email: input.email,
        password: input.password,
      });
      setInput({
        name: "",
        email: "",
        password: "",
      });
      setCreatedSuccessfully(true);
    }
  };
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <div className="m-auto card w-50 p-3">
      {createdSuccessfully && (
        <div className="alert alert-success" role="alert">
          Account Created Successfully
        </div>
      )}
      {errors !== "" && (
        <div className="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
      <form className="requires-validation form-body" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputName">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="inputName"
            placeholder="Name"
            value={input.name}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter Your Name.</div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputEmail">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputPassword">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>

        {user === null ? (
          <button
            type="submit"
            className={
              input.name === "" || input.email === "" || input.password === ""
                ? "btn btn-primary disabled"
                : "btn btn-primary "
            }
          >
            Create Account
          </button>
        ) : (
          <button
            type="submit"
            className={
              input.name === "" || input.email === "" || input.password === ""
                ? "btn btn-primary disabled"
                : "btn btn-primary "
            }
          >
            Add Another Account
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateAccount;
