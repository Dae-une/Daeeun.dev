import styled from '@emotion/styled';
import { ThemeType } from 'hooks/useThemeSwitch';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  width: 3.5rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.gray[1]};
`;

interface ThemeProps {
  themeType: ThemeType;
}

export const Theme = styled.div<ThemeProps>`
  position: absolute;
  top: 3px;
  left: ${({ themeType }) => themeType === 'light' && '4px'};
  right: ${({ themeType }) => themeType === 'dark' && '4px'};
`;
