import React, { Component, Fragment } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button, Col } from "react-bootstrap";
// import Icon from "../images/original_trans.png";
import "./style.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMsg: false,
      isSending: false,
      show: false,
    };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  onSubmit = (values, { resetForm }) => {
    const { isShowMsg, isSending } = this.state;
    this.setState({
      isSending: true,
    });
    axios
      .post("https://formcarry.com/s/AcKwMfI0r0RW", values, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        if (response.data.status === "success") {
          this.setState({ isSending: false, isShowMsg: true });
          resetForm();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { isSending, isShowMsg } = this.state;

    return (
      <div className="contact_upper_div">
        <section
          className="content-section text-white text-center"
          id="services"
        >
          <div className="container">
            <div className="content-section-heading">
              <h3 className="text-dark mb-0">Get to know Us..</h3>
              <h1 className="mb-5" style={{ color: "white" }}>
                Creator and Founder of DONATE NOW ...
              </h1>
            </div>
            <div className="row">
              <div className="col-lg-1 col-md-0 mb-5 mb-lg-0"></div>
              <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  {/* <a href="https://lloydmarcelino.com" target="blank_">
                    {" "}
                    <img
                      src={Lloyd}
                      style={{ width: "150px", height: "150px" }}
                      alt="Lloyd Marcelino"
                      id="contact_photo"
                    ></img>
                  </a> */}
                </span>
                <h4>
                  <strong>Rutvi Tilala</strong>
                </h4>
                <p className="text-faded mb-0" style={{ color: "white" }}>
                  Software Developer
                </p>
                <p className="text-faded mb-0" style={{ color: "white" }}>
                  Northeastern University
                </p>
              </div>
              <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3"></span>
                <h4>
                  <strong>Ridham Modh</strong>
                </h4>
                <p className="text-faded mb-0" style={{ color: "white" }}>
                  Software Developer
                </p>
                <p className="text-faded mb-0" style={{ color: "white" }}>
                  Northeastern University
                </p>
              </div>
              <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3"></span>
                <h4>
                  <strong>Mahak Jain</strong>
                </h4>
                <p className="text-faded mb-0" style={{ color: "white" }}>
                  Software Developer
                </p>
                <p className="text-faded mb-0" style={{ color: "white" }}>
                  Northeastern University
                </p>
              </div>
              <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3"></span>
                <h4>
                  <strong>Panth Shah</strong>
                </h4>
                <p className="text-faded mb-0" style={{ color: "white" }}>
                  Software Developer/ Data Analyst
                </p>
                <p className="text-faded mb-0" style={{ color: "white" }}>
                  Northeastern University
                </p>
              </div>

              <div className="col-lg-2 col-md-6">
                <span className="service-icon rounded-circle mx-auto mb-3"></span>
                <h4>
                  <strong>Naman Diwan</strong>
                </h4>
                <p className="text-faded mb-0" style={{ color: "white" }}>
                  Software Developer
                </p>
                <p className="text-faded mb-0" style={{ color: "white" }}>
                  Northeastern University
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section" id="contact_form">
          <div className="page_inner_div">
            <h1 className="site-heading" style={{ fontWeight: "900" }}>
              {" "}
              Do you have a question?{" "}
            </h1>
            <h3 className="site-heading" style={{ fontWeight: "900" }}>
              Give us a review..
            </h3>
            <h5>Send us a message!</h5>

            <Formik
              className="site-form"
              initialValues={{
                name: "",
                email: "",
                title: "",
                location: "",
                subject: "",
                message: "",
              }}
              validate={(values) => {
                let errors = {};
                if (!values.name) {
                  errors.name = "Name is required";
                }
                if (!values.subject) {
                  errors.subject = "Subject is required";
                }
                if (!values.email) {
                  errors.email = "Email is required";
                }
                if (!values.title) {
                  errors.title = "Title is required";
                }
                if (!values.location) {
                  errors.location = "Location is required";
                }
                if (!values.message) {
                  errors.message = "Message is required";
                }
                return errors;
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                title: Yup.string().required(),
                location: Yup.string().required(),
                subject: Yup.string().required(),
                message: Yup.string().required(),
              })}
              onSubmit={this.onSubmit}
              render={({
                handleChange,
                handleBlur,
                values,
                errors,
                handleSubmit,
                touched,
              }) => (
                <Fragment>
                  <Form className="site-form" onSubmit={handleSubmit}>
                    {isShowMsg && (
                      <div class="alert alert-success">
                        Thank you for sending us a message!
                      </div>
                    )}
                    <Form.Row>
                      <Col>
                        <Form.Group
                          controlId="formGroupText"
                          className="site-form__form-group"
                        >
                          <Form.Label
                            htmlFor="input-name"
                            className="site-form__label"
                          >
                            Name:
                          </Form.Label>
                          <Form.Control
                            placeholder="name"
                            type="text"
                            name="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`site-form__input ${
                              errors.name && touched.name
                                ? "site-form__input-error"
                                : ""
                            }`}
                            id="input-name"
                            value={values.name}
                          />
                          {errors.name && touched.name && (
                            <div className="site-form__error">
                              {" "}
                              {errors.name}{" "}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          controlId="formGroupEmail"
                          className="site-form__form-group"
                        >
                          <Form.Label
                            htmlFor="input-email"
                            className="site-form__label"
                          >
                            Email:
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="email"
                            name="email"
                            onChange={handleChange}
                            className={`site-form__input ${
                              errors.email && touched.email
                                ? "site-form__input-error"
                                : ""
                            }`}
                            id="input-email"
                            value={values.email}
                          />
                          {errors.email && touched.email && (
                            <div className="site-form__error">
                              {" "}
                              {errors.email}{" "}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                    </Form.Row>

                    <Form.Row>
                      <Col>
                        <Form.Group
                          controlId="formGroupText"
                          className="site-form__form-group"
                        >
                          <Form.Label
                            htmlFor="input-name"
                            className="site-form__label"
                          >
                            Title
                          </Form.Label>
                          <Form.Control
                            placeholder="title/ company"
                            type="text"
                            name="title"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`site-form__input ${
                              errors.title && touched.title
                                ? "site-form__input-error"
                                : ""
                            }`}
                            id="input-name"
                            value={values.title}
                          />
                          {errors.title && touched.title && (
                            <div className="site-form__error">
                              {" "}
                              {errors.title}{" "}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          controlId="formGroupText"
                          className="site-form__form-group"
                        >
                          <Form.Label
                            htmlFor="input-name"
                            className="site-form__label"
                          >
                            Location:
                          </Form.Label>
                          <Form.Control
                            placeholder="location"
                            type="text"
                            name="location"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`site-form__input ${
                              errors.location && touched.location
                                ? "site-form__input-error"
                                : ""
                            }`}
                            id="input-name"
                            value={values.location}
                          />
                          {errors.location && touched.location && (
                            <div className="site-form__error">
                              {" "}
                              {errors.location}{" "}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                    </Form.Row>

                    <Form.Row>
                      <Col>
                        <Form.Group
                          controlId="formGroupText"
                          className="site-form__form-group"
                        >
                          <Form.Label
                            htmlFor="input-name"
                            className="site-form__label"
                          >
                            Subject:
                          </Form.Label>
                          <Form.Control
                            placeholder="subject"
                            type="text"
                            name="subject"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`site-form__input ${
                              errors.subject && touched.subject
                                ? "site-form__input-error"
                                : ""
                            }`}
                            id="input-subject"
                            value={values.subject}
                          />
                          {errors.subject && touched.subject && (
                            <div className="site-form__error">
                              {" "}
                              {errors.subject}{" "}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                    </Form.Row>

                    <Form.Group
                      controlId="exampleForm.ControlTextarea1"
                      className="site-form__form-group"
                    >
                      <Form.Label>Message:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="8"
                        name="message"
                        placeholder="Enter your message"
                        onChange={handleChange}
                        className={`site-form__textarea ${
                          errors.message && touched.message
                            ? "site-form__input-error"
                            : ""
                        }`}
                        id="input-message"
                        value={values.message}
                      />
                      {errors.message && touched.message && (
                        <div className="site-form__error">
                          {" "}
                          {errors.message}{" "}
                        </div>
                      )}
                    </Form.Group>

                    <Button
                      type="submit"
                      className="btn btn-secondary btn-md btn-radius"
                      disabled={isSending}
                    >
                      {isSending ? (
                        <span className="loading-icon"> </span>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Form>
                </Fragment>
              )}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
