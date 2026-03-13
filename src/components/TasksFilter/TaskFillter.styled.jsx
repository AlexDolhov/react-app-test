import styled from "styled-components";

export const Button = styled.button`
border-radius: 2px;
text-decoration: none;
color: ${({ selected }) => (selected ? "white" : "black")};
background-color: ${({selected}) => (selected ? "orangered" : "inherit")};

&:active{
  color: white;
  background-color: orangered;
}

`