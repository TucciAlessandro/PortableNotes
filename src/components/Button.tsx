import React, { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps {
  size?: ButtonSize;
  color: Variant;
  children: ReactNode;
}

type Variant = "primary" | "secondary" | "danger";
type ButtonSize = "small" | "medium" | "large";

const buttonSizes: any = {
  small: "5px 10px",
  medium: "10px 20px",
  large: "15px 30px",
};

const getBackground = (variant: Variant, props: any) =>
  props.theme.buttonVariant[variant];

const getSize = (size: ButtonSize = "medium") => buttonSizes[size];

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => getBackground(props.color, props)};
  color: white;
  border-radius: 6px;
  border: 1px solid #2c3e50;
  font-size: 16px;
  cursor: pointer;
  margin: 0.5rem;
  padding: ${(props) => getSize(props.size)};
  text-decoration: none;
  &:focus {
    outline: none;
    border: 1px solid white;
  }
  &:hover {
    border: 1px solid white;
    transform: translateY(-0.3rem);
  }
  transition: all 0.3s ease-in-out;
`;

const Button = ({
  size,
  color,
  children,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton size={size} color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
