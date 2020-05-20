import React from "react";
import Topbar from "../SharedComponents/Topbar";
import Sidebar from "../SharedComponents/Sidebar";
import Footer from "../SharedComponents/Footer";

import { Container, Row, Col } from "react-bootstrap";

export function GlobalLayout(props) {
  return (
    <div>
      <Topbar />
      {props.children}
    </div>
  );
}

export function DashboardLayout(props) {
  return (
    <>
      <Topbar />
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          {props.children}
          <div style={{ background: "white" }}></div>
          <Footer />
        </Col>
      </Row>
    </>
  );
}
