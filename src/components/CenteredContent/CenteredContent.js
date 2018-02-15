import React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Container = styled.div `
  width: 100%;
  padding: 60px 20px;

  ${breakpoint("tablet")`
    padding: 0 60px;
  `};
`;

const Content = styled.div `
  max-width: 1200px;
  margin: 0 auto;
`;

const CenteredContent = ({
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Content>{children}</Content>
    </Container>
  );
};

export default CenteredContent;
