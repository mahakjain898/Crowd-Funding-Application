import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function RowDetails({ Email, Lastname, Firstname, Id, IsAdmin, OnDelete }) {
  return (
    <tr>
      <th>{Email}</th>
      <td>{Lastname}</td>
      <td>{Firstname}</td>
      <td>{IsAdmin.toString()}</td>

      <td className="gap__actions">
        {/* <span className="badge bg-info">
          <Link to={`admin/${Id}`} className="text-white">
            <i className="fas fa-edit"></i>
          </Link>
        </span> */}
        <button className="btn btn-info" type="submit">
          <Link to={`admin/${Id}`} className="text-white">
            Edit
          </Link>
        </button>

        {/* <span className="badge bg-danger" onClick={() => OnDelete(Id)}>
          <i className="fas fa-trash-alt"></i>
        </span> */}
        <button
          className="btn btn-info"
          type="submit"
          onClick={() => OnDelete(Id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RowDetails;
