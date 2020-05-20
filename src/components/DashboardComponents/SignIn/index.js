import React, { Component } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withFormik } from "formik";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { Wrapper } from "../../Wrappers/";
import { GlobalLayout } from "../../Layouts";

function DashboardSignIn(props) {
  const { values, handleSubmit, handleChange, setSubmitting, history } = props;

  return (
    <GlobalLayout>
      <Wrapper center>
        <img src="/assets/dreamer.svg" alt="" />
        <Container>
          <Row className="justify-content-center">
            <Col sm={9}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Login</Card.Title>
                  <Form onSubmit={(handleSubmit, history.push("/dashboard"))}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={2}>
                        Email
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          size="lg"
                          type="text"
                          name="email"
                          onChange={handleChange}
                          value={values.email}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Form.Label column sm={2}>
                        Password
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          size="lg"
                          type="password"
                          name="password"
                          onChange={handleChange}
                          value={values.password}
                        />
                      </Col>
                    </Form.Group>
                    <Button variant="outline-danger" size="lg" type="submit">
                      {" "}
                      Sign in{" "}
                    </Button>
                  </Form>
                </Card.Body>
                <Card.Footer></Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </GlobalLayout>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    email: "goduser@admin.com",
    password: "pass",
  }),
  handleSubmit: (values, { setSubmitting, history }) => {
    axios
      .post("http://localhost:8080/authenticate", values)
      .then((res) => {
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log("bad user", error);
      });
  },
})(DashboardSignIn);
