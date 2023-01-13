import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.gray[2]};
  z-index: 10;
`;

export const LogoWrpper = styled.div``;

export const AboutWrpper = styled.div`
  display: flex;
  gap: 1rem;
`;