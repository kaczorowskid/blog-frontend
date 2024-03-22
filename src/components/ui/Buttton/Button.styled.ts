import styled, { type CSSProperties } from 'styled-components';

type ButtonProps = {
  transparent?: boolean;
  block?: boolean;
  fontSize?: CSSProperties['fontSize'];
};

export const Button = styled.button<ButtonProps>`
  width: ${({ block }) => (block ? '100%' : 'auto')};
  height: 48px;
  font-size: ${({ fontSize }) => `${fontSize}px` || 'inital'};
  color: ${({ transparent }) => (transparent ? '#010104' : '#eff0f3')};
  cursor: pointer;
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : '#010104'};
  border: none;
`;
