import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

import { Wrapper } from "../../Wrappers";
import { Title, Body } from "./style";
import { GlobalLayout } from "../../Layouts";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/get-posts")
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  Blogs() {
    return this.state.posts.map((res) => {
      return (
        <div style={{ padding: "10px" }}>
          <Title> {res.title} </Title>
          <Body>
            {res.body}
            <Link to={`/post/${res._id}`}> read more...</Link>
          </Body>
          <Button variant="outline-danger"> {res.likes} Likes</Button>
        </div>
      );
    });
  }

  render() {
    return (
      <GlobalLayout>
        <Wrapper blog>
          <Title
            className="justify-content-center"
            style={{ "padding-bottom": "50px" }}
          >
            {" "}
            React Blog{" "}
          </Title>
          {this.Blogs()}
        </Wrapper>
      </GlobalLayout>
    );
  }
}
