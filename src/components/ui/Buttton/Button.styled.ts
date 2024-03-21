import styled, { CSSProperties } from 'styled-components';

type ButtonProps = {
  transparent?: boolean;
  block?: boolean;
  fontSize?: CSSProperties['fontSize'];
};

export const Button = styled.button<ButtonProps>`
  border: none;
  height: 48px;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : '#010104'};
  color: ${({ transparent }) => (transparent ? '#010104' : '#eff0f3')};
  font-size: ${({ fontSize }) => `${fontSize}px` || 'inital'};
  cursor: pointer;
`;
