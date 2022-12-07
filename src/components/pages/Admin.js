import React, { useEffect, useState } from "react";
import InputGroup from "../admin/InputGroup";
import RowDetails from "../admin/RowDetails";
import Alert from "../admin/Alert";
import axios from "axios";
function Admin() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users", form)
      .then((res) => {
        setMessage(res.data.message);
        /* hide form after save */
        setForm({});
        /* hide errors after save */
        setErrors({});
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 4000);
      })
      .catch((err) => setErrors(err.response.data));
  };

  /* delete */
  const OnDelete = (id__) => {
    if (window.confirm("are you sure to delete this user")) {
      axios.delete(`http://localhost:8080/api/users/${id__}`).then((res) => {
        setMessage(res.data.message);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 4000);
      });
    }
  };
  const getUsers = async () => {
    try {
      const users = await axios.get("http://localhost:8080/api/users");
      if (users) setUsers(users.data);
    } catch {
      console.log("something went wrong!");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="row p-4">
      <Alert message={message} show={show} />

      <div className="col-12 col-lg-4">
        <form onSubmit={onSubmitHandler}>
          <InputGroup
            label="Email"
            type="text"
            name="email"
            onChangeHandler={onChangeHandler}
            errors={errors.email}
          />
          <InputGroup
            label="Lastname"
            type="text"
            name="lastName"
            onChangeHandler={onChangeHandler}
            errors={errors.lastName}
          />
          <InputGroup
            label="Firstname"
            type="text"
            name="firstName"
            onChangeHandler={onChangeHandler}
            errors={errors.firstName}
          />
          <InputGroup
            label="Password"
            type="password"
            name="password"
            onChangeHandler={onChangeHandler}
            errors={errors.password}
          />

          <button className="btn btn-primary" type="submit">
            Add user
          </button>
        </form>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Lastname</th>
              <th scope="col">Firstname</th>
              <th scope="col">Admin</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ email, lastName, firstName, _id, isAdmin }) => (
              <RowDetails
                Email={email}
                Lastname={lastName}
                Firstname={firstName}
                Id={_id}
                IsAdmin={isAdmin}
                OnDelete={OnDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
