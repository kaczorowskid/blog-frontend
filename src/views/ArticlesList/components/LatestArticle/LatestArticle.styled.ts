import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  margin: 20px 0 60px 0;
  overflow: hidden;
  height: 700px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;

  display: grid;
  grid-template-areas:
    '. .'
    'info .';

  grid-template-rows: 350px auto;
  grid-template-columns: auto 400px;
  cursor: pointer;
`;

export const OverlayContent = styled.div`
  grid-area: info;
  padding: 20px 40px;
`;

export const Date = styled.span`
  margin-left: 20px;
`;

export const Title = styled.h3`
  font-size: 2.7rem;
  font-weight: 400;
  margin: 10px 0;
`;

export const Description = styled.span``;
