import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  position: relative;
  height: 55px;
  color: #ffffff;
`;

export const Link = styled(NavLink)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover, :focus {
    color: #a62633;
  }

  &::after{
    position:absolute;
    top: 50px;
    left: 0;
    content: " ";
    border-bottom: 2px solid #a62633;
    transform: scale(0);
    width:100%;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &.active {
    color: #a62633;
      ::after{
        transform: scale(1,1);
      }
  }
`;