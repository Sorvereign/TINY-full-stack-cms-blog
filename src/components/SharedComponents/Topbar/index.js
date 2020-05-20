import React from "react";
import { Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <Navbar bg="danger" variant="dark" sticky="top" className="shadow-lg">
      <Navbar.Brand> Tiny CMS </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link to="/sign">Dashboard</Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
