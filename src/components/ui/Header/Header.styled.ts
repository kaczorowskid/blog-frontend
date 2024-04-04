import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  -webkit-box-shadow: 0px 10px 22px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 10px 22px -9px rgba(66, 68, 90, 1);
  box-shadow: 0px 10px 22px -9px rgba(66, 68, 90, 1);

  h1 {
    margin-left: 20px;
    font-family: 'Alike', serif;
  }

  img {
    height: 50px;
    margin-left: 10px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
