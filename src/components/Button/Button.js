import React from "react";
import styled from "styled-components";

const RealButton = styled.button `
  display: inline-block;
  margin: 0;
  border: 0;
  background: #bec1c3;
  color: #ffffff;
  border-radius: 4px;
  font-size: 15px;
  height: 36px;
  text-decoration: none;
  flex-shrink: 0;
  cursor: pointer;
  border: 1px solid #bec1c3;
  border-radius: 40px;
  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  svg {
    position: relative;
    top: 0.05em;
  }
  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
  ${props => props.outline && `
    color: #BEC1C3;
    background: transparent;
  `};
  ${props => props.light && `
    color: #8CD8A9;
    background: #FFFFFF;
    border-color: #FFFFFF;
  `};
`;

const Label = styled.span `
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${props => props.hasIcon && "padding-left: 0.5rem;"};
`;

const Inner = styled.span `
  padding: 0 12px;
  display: flex;
  line-height: 28px;
  justify-content: center;
  align-items: center;
  ${props => props.hasIcon && (props.small
  ? "padding: 0 1.5rem;"
  : "padding: 0 1.5rem 0 0.5rem;")};
`;

const Button = ({
  type = "text",
  icon,
  children,
  value,
  ...rest
}) => {
  const hasText = children !== undefined || value !== undefined;
  const hasIcon = icon !== undefined;

  return (
    <RealButton {...rest}>
      <Inner hasIcon={hasIcon}>
        {hasIcon && icon}
        {hasText && <Label hasIcon={hasIcon}>{children || value}</Label>}
      </Inner>
    </RealButton>
  );
};

export default Button;
