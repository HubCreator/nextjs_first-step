// import React from "react";
// import "../../styles/Button.css";

interface buttonProps {
  buttonStyle: string | null;
  buttonSize: string | null;
  buttonColor: string | null;
  children: string | null;
  type: any | null;
  onClick: any | null;
}

const STYLES = ["btn--primary", "btn--outline", null];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide", null];

const COLORS = ["primary", "blue", "red", "green", null];

export const Button = ({
  buttonStyle,
  buttonSize,
  buttonColor,
  children,
  type,
  onClick,
}: buttonProps) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
