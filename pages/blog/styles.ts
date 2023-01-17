import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  width: 100%;
  height: 9rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[1]};
`;

export const TitleDate = styled.span`
  font-size: 0.9rem;
  font-weight: 200;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;
