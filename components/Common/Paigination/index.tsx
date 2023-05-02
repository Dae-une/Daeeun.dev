import Link from 'next/link';
import React, { FC } from 'react';
import * as Style from './stlyes';

interface PaiginationProps {
  totalPage: number;
  currentPage: number;
}

const Paigination: FC<PaiginationProps> = ({ totalPage, currentPage }) => {
  const pages = new Array(totalPage).fill(1).map((num, idx) => num + idx);

  return (
    <Style.Layout>
      {pages.map((num) => (
        <Link href={`/?page=${num}`} key={num}>
          <div>{num}</div>
        </Link>
      ))}
    </Style.Layout>
  );
};

export default Paigination;
