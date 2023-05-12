import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

export const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 70px auto;
  margin: 40px 0;
  padding: 1rem;
  gap: 2rem;
  background-color: var(--profile-cover);
  border-radius: 1rem;
  align-items: center;
`;

export const ProfileImg = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileContent = styled.div`
  strong {
    font-size: 20px;
  }
  div {
    margin: 5px 0;
  }
  span {
    font-size: 14px;
  }
`;

export const Channel = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const LinkItem = styled(Link)`
  color: #bb72ec;
  text-decoration: none;
  font-size: 14px;
`;
