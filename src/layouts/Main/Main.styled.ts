import styled from 'styled-components';
import { mediaQuery } from 'styles';

export const Conatiner = styled.main`
  max-width: 90%;
  padding: 32px 0px;
  margin: 0 auto;

  ${mediaQuery.tablet} {
    max-width: 1280px;
  }
`;
