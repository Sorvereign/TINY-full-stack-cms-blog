import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styled from "styled-components";
import axios from "axios";

import { DashboardLayout } from "../../Layouts";

const StyledContainer = styled(Container)`
  justify-content: space-betwwen;
  display: flex;
  flex-direction: column;
  background: #dc3545;
  padding-bottom: 50px;
  border-radius: 0px 0px 10px 10px;
  color: white;
`;

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/get-posts")
      .then((res) => {
        this.setState({
          stats: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  Table() {
    let counter = 0;
    return this.state.stats.map((res) => {
      return (
        <tbody>
          <tr>
            <td>{counter++}</td>
            <td>{res.author}</td>
            <td>{res.title}</td>
            <td>{res.likes}</td>
          </tr>
        </tbody>
      );
    });
  }

  render() {
    return (
      <DashboardLayout>
        <StyledContainer>
          <h3
            style={{
              padding: "20px",
            }}
          >
            Blog Dashboard
          </h3>
          <AreaChart
            width={1100}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#000000"
              fill="#ffffff"
            />
          </AreaChart>
        </StyledContainer>

        <Container fluid>
          <h4>Your Stats</h4>
          <Row style={{ "padding-top": "40px" }}>
            <Col>
              <Card bg="primary" text="white" className="text-center shadow-lg">
                <Card.Header>Posts</Card.Header>
                <Card.Body>0</Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="warning" text="white" className="text-center shadow-lg">
                <Card.Header>Users</Card.Header>
                <Card.Body>1</Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="dark" text="white" className="text-center shadow-lg">
                <Card.Header>Total Likes</Card.Header>
                <Card.Body>Data 1</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container fluid style={{ "padding-top": "50px" }}>
          <h4 style={{ "padding-top": "20px" }}>Your Projects </h4>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>Author</th>
                <th>Post Title</th>
                <th>Likes</th>
              </tr>
            </thead>
            {this.Table()}
          </Table>
        </Container>
      </DashboardLayout>
    );
  }
}
