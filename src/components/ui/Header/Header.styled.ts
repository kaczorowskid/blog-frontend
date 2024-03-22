import styled from 'styled-components';
import { mediaQuery } from 'styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  -webkit-box-shadow: 0px 10px 22px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 10px 22px -9px rgba(66, 68, 90, 1);
  box-shadow: 0px 10px 22px -9px rgba(66, 68, 90, 1);

  img {
    height: 100px;
    margin-left: 20px;
    cursor: pointer;

    ${mediaQuery.tablet} {
      margin-left: 40px;
    }
  }
`;
