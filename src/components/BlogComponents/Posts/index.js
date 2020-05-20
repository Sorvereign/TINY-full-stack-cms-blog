import React from "react";
import axios from "axios";
import { GlobalLayout } from "../../Layouts";
import { Wrapper } from "../../Wrappers";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8080/get-post/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          post: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  Post() {
    const { post } = this.state;
    return (
      <GlobalLayout>
        <Wrapper blog>
          <h1> {post.title} </h1>
          <p> {post.short} </p>
        </Wrapper>
      </GlobalLayout>
    );
  }

  render() {
    return <div>{this.Post()}</div>;
  }
}
