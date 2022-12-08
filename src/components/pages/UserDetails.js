import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputGroup from "../admin/InputGroup";

function UserDetails() {
  const [form, setForm] = useState({});
  const { id } = useParams();
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/users/${id}`, form)
      .then((res) => {
        // navigate("/");
        window.location.href = "/admin";
      })
      .catch((err) => setErrors(err.response.data));
  };

  useEffect(async () => {
    await axios.get(`http://localhost:8080/api/users/${id}`).then((res) => {
      setForm(res.data);
    });
  }, []);
  return (
    <div className="container mt-4 col-12 col-lg-4">
      <form onSubmit={onSubmitHandler}>
        <InputGroup
          label="Email"
          type="text"
          name="email"
          onChangeHandler={onChangeHandler}
          errors={errors.email}
          value={form.email}
        />

        <InputGroup
          label="Firstname"
          type="text"
          name="firstName"
          onChangeHandler={onChangeHandler}
          errors={errors.firstName}
          value={form.firstName}
        />
        <InputGroup
          label="Lastname"
          type="text"
          name="lastName"
          onChangeHandler={onChangeHandler}
          errors={errors.lastName}
          value={form.lastName}
        />
        {/* <InputGroup
          label=""
          type="password"
          name="password"
          onChangeHandler={onChangeHandler}
          errors={errors.password}
          value={form.password}
        /> */}
        <fieldset>
          <legend>Is Admin:</legend>

          <div>
            <input
              type="radio"
              id="true"
              name="isAdmin"
              value={true}
              checked={true === form.isAdmin}
            />
            <label for="huey">Yes</label>
          </div>

          <div>
            <input
              type="radio"
              id="false"
              name="isAdmin"
              value={false}
              checked={false === form.isAdmin}
            />
            <label for="dewey">No</label>
          </div>
        </fieldset>
        <button className="btn btn-info" type="submit">
          Save User
        </button>
      </form>
    </div>
  );
}

export default UserDetails;
