import { Container } from './Footer.styled';
import { FooterProps } from './Footer.types';

export const Footer = ({ info }: FooterProps): JSX.Element => {
  return <Container>{info}</Container>;
};
