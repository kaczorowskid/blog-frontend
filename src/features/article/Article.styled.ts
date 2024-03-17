import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div<{ isPreviewMode?: boolean }>`
  padding: 20px 0px;

  &::before {
    content: '';
    display: ${({ isPreviewMode }) => (isPreviewMode ? 'none' : 'block')};
    position: absolute;
    z-index: -1;
    top: 0;
    left: -20px;
    right: -20px;
    border: 2px solid #010104;
    border-bottom: none;
    height: 50px;
  }

  &::after {
    content: '';
    display: ${({ isPreviewMode }) => (isPreviewMode ? 'none' : 'block')};
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: -20px;
    right: -20px;
    border: 2px solid #010104;
    border-top: none;
    height: 50px;
  }
`;
