import React from "react";
import styled from "styled-components";

const StyledBox = styled.div `
  width: 100%;
  margin: 0 auto 20px;
  border-radius: 6px;
  min-height: 104px;
  background-color: #fff;
  transition: box-shadow 0.2s ease-in;
  border: 1px solid #e3e3e3;
  padding: 19px;
  align-items: flex-start;
  align-items: center;
  display: flex;
  text-align: left;
`;

const Box = ({
  children,
  ...rest
}) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

export default Box;
