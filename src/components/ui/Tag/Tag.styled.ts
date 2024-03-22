import styled from 'styled-components';

export const Container = styled.span<{ isDark: boolean }>`
  min-width: 20px;
  height: 30px;
  padding: 5px 10px;
  color: ${({ isDark }) => (isDark ? '#eff0f3' : '#010104')};
  background-color: ${({ isDark }) => (isDark ? '#010104' : '#eff0f3')};
  border-radius: 20px;
`;
