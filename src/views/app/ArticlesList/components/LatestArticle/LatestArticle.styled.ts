import styled from 'styled-components';
import { mediaQuery } from 'styles';

export const ImageWrapper = styled.div`
  position: relative;
  height: auto;
  margin: 20px 0 60px 0;
  overflow: hidden;

  ${mediaQuery.tablet} {
    height: 700px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  grid-template-rows: 350px auto;
  grid-template-columns: auto 400px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);

  ${mediaQuery.tablet} {
    display: grid;
    grid-template-areas:
      '. .'
      'info .';
  }
`;

export const OverlayContent = styled.div`
  grid-area: info;
  padding: 20px 40px;
`;

export const Date = styled.span`
  margin-left: 20px;
`;

export const Title = styled.h2`
  margin: 10px 0;
  font-size: 2.7rem;
  font-weight: 400;
`;

export const Description = styled.p`
  display: none;

  ${mediaQuery.tablet} {
    display: block;
  }
`;
