import { Button } from 'components';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div<{ isPreviewMode?: boolean }>`
  position: relative;
  height: ${({ isPreviewMode }) => (isPreviewMode ? '1300px' : 'auto')};
  overflow: hidden;
`;

export const BlurArticle = styled.div<{ isPreviewMode?: boolean }>`
  position: absolute;
  top: 0;
  display: ${({ isPreviewMode }) => !isPreviewMode && 'none'};
  width: 100%;
  height: 1300px;
  pointer-events: none;
  background: linear-gradient(#0000, #000 50%, #fff);
  backdrop-filter: blur(10px);
  -webkit-mask: linear-gradient(#0000, #000 90%);
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  &:hover {
    background-color: #e1e1e1;
  }
`;
