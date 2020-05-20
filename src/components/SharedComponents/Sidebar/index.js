import React from "react";
import { StyledSidebar, SidebarItem } from "./style";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <StyledSidebar className="shadow-lg">
      <h3>Menu</h3>
      <SidebarItem>Create</SidebarItem>
      <SidebarItem>Edit</SidebarItem>
      <SidebarItem>Delete</SidebarItem>
    </StyledSidebar>
  );
}
