// import React, { Component } from "react";

// export default class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fname: "",
//       lname: "",
//       email: "",
//       password: "",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     const { fname, lname, email, password } = this.state;
//     console.log(fname, lname, email, password);
//     fetch("http://localhost:5000/register", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         fname,
//         email,
//         lname,
//         password,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userRegister");
//       });
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h3>Sign Up</h3>

//         <div className="mb-3">
//           <label>First name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="First name"
//             onChange={(e) => this.setState({ fname: e.target.value })}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Last name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Last name"
//             onChange={(e) => this.setState({ lname: e.target.value })}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             onChange={(e) => this.setState({ email: e.target.value })}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             onChange={(e) => this.setState({ password: e.target.value })}
//           />
//         </div>

//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <a href="/login">sign in?</a>
//         </p>
//       </form>
//     );
//   }
// }
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styles from "./registerstyles.module.css";

const Register = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const history = useHistory();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			history.push("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;