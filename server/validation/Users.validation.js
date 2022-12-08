const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateUser(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  // data.isAdmin = !isEmpty(data.isAdmin) ? data.isAdmin : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "Format Email required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Required Email";
  }
  if (validator.isEmpty(data.lastName)) {
    errors.lastName = "Required Lastname";
  }
  if (validator.isEmpty(data.firstName)) {
    errors.firstName = "Required Firstname";
  }
  // if (validator.isEmpty(data.isAdmin)) {
  //   errors.isAdmin = "Required Email";
  // }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
