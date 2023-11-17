import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ButtonProps {
  nav: string;
  text: string;
}

const StyledSweepButton = styled.button`
  width: 90%;
  height: 4em;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #e9b05c;
  margin-bottom: 0.25em;
  margin-top: 0.25em;
  font-family: sans-serif;
  font-size: 12pt;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;

  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  :before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #e9b05c;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  :hover,
  :focus,
  :active {
    color: #ffffff;
  }

  :hover:before,
  :focus:before,
  :active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

export function SweepButton({ nav, text }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <StyledSweepButton onClick={() => navigate(nav)}>{text}</StyledSweepButton>
  );
}

export default SweepButton;
