import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSidebar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 231px;
  height: 100vh;
  background: #282828;
  color: white;

  & > h3 {
    padding-top: 10px;
    margin-left: 10px;
  }
`;

export const SidebarItem = styled(Link)`
  display: flex;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;

  color: white;

  &:first-child {
    margin-left: 0px;
  }

  &:hover {
    background: #d8d8d8;
    text-decoration: none;
  }
`;
