import styled from "styled-components";

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  padding: 2px;

  border-radius: 4px;

  box-shadow: inset 0px 2px 1px 2px rgba(0, 0, 0, 0.9);
`;


export const Button = styled.button`
  flex-shrink: 0;

  margin-left: auto;

  background-color: orangered;
  height: 30px;
  width: 30px;
`;