import { Container } from './Footer.styled';
import { FooterProps } from './Footer.types';

export const Footer = ({ info }: FooterProps) => {
  return <Container>{info}</Container>;
};
