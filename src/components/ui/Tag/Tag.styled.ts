import styled from 'styled-components';

export const Container = styled.span<{ isDark: boolean }>`
  min-width: 20px;
  height: 30px;
  background-color: ${({ isDark }) => (isDark ? '#010104' : '#eff0f3')};
  color: ${({ isDark }) => (isDark ? '#eff0f3' : '#010104')};
  padding: 5px 10px;
  border-radius: 20px;
`;
