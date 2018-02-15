import React, {PureComponent} from "react";
import styled from "styled-components";
import Button from "../Button";
import {Link} from "react-router-dom";

const StyledHeader = styled.nav `
  height: 70px;
  background-image: linear-gradient(
    -90deg,
    #8cd8a9 0%,
    #84d1a6 20%,
    #62b69b 100%
  );
  color: #fff;
  margin-bottom: 2rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled(Link)`
  font-size: 22px;
  letter-spacing: 0.03rem;
  color: #ffffff;
`;

const StyledButton = styled.div `
  font-size: 22px;
  letter-spacing: 0.03rem;
`;

class Header extends PureComponent {
  render() {
    return (
      <StyledHeader>
        <StyledLogo to="/">
          jobs.<strong>devparana</strong>
        </StyledLogo>
        <StyledButton>
          <Button light>Post Job</Button>
        </StyledButton>
      </StyledHeader>
    );
  }
}

export default Header;
