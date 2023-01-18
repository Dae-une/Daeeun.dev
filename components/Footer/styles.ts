import styled from '@emotion/styled';

export const Footer = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[1]};
`;
