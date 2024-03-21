import { Button } from 'components';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div<{ isPreviewMode?: boolean }>`
  height: ${({ isPreviewMode }) => (isPreviewMode ? '1300px' : 'auto')};
  overflow: hidden;
  position: relative;
`;

export const BlurArticle = styled.div<{ isPreviewMode?: boolean }>`
  display: ${({ isPreviewMode }) => !isPreviewMode && 'none'};
  position: absolute;
  top: 0;
  width: 100%;
  height: 1300px;
  pointer-events: none;
  -webkit-mask: linear-gradient(#0000, #000 90%);
  background: linear-gradient(#0000, #000 50%, #fff);
  backdrop-filter: blur(10px);
`;

export const ButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
`;

export const StyledButton = styled(Button)`
  &:hover {
    background-color: #e1e1e1;
  }
`;
