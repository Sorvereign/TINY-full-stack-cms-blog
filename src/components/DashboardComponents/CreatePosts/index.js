import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { withFormik } from "formik";

import { DashboardLayout } from "../../Layouts";

function CreatePosts(props) {

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;
  return (
    <DashboardLayout>
      <Container fluid>
        <h3 style={{ padding: "20px" }}>Create Post</h3>

        <Form onSubmit={handleSubmit}>
          <Card className="d-flex mb-5">
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label column sm={2}>
                  Author
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="author"
                  onChange={handleChange}
                  value={values.author}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label column sm={2}>
                  Title
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={values.title}
                />
              </Form.Group>{" "}
            </Form.Row>

            <Form.Group as={Col}>
              <Form.Label column sm={2}>
                Abstract
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  size="lg"
                  type="text"
                  name="short"
                  onChange={handleChange}
                  value={values.short}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label column sm={2}>
                Content
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  size="lg"
                  as="textarea"
                  name="body"
                  onChange={handleChange}
                  value={values.body}
                />
              </Col>
            </Form.Group>

            <Button variant="danger" type="submit">
              Create Posts{" "}
            </Button>
          </Card>
        </Form>
      </Container>
    </DashboardLayout>
  );
}

export default withFormik({
  mapPropToValues: () => ({
    author: "",
    title: "",
    short: "",
    body: "",
  }),
  handleSubmit: (values, { setSubmitting }) => {
    axios
      .post("http://localhost:8080/add-post", values)
      .then((res) => console.log(res.data));
  },
})(CreatePosts);
