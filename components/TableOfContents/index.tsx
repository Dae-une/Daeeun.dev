import React, { FC, useEffect, useState } from 'react';
import { getIntersectionObserver } from 'utils/getIntersectionObserver';
import * as Style from './styles';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const TableOfContents = () => {
  const router = useRouter();
  const [currentId, setCurrentId] = useState('');
  const [headEls, setHeadEls] = useState<Element[]>([]);

  const isActived = (id: string) => id === currentId;

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const els = Array.from(document.querySelectorAll('h1, h2, h3'));

    setHeadEls(els);

    els.map((head) => {
      observer.observe(head);
    });
  }, [router]);

  console.log(headEls);

  return (
    <Style.TocWrapper>
      <Style.Toc>
        {headEls.map((head) => (
          <div key={head.id}>
            <Style.TocLink href={`#${head.id}`} isActived={isActived(head.id)}>
              {head.nodeName === 'H3' && '• '}
              {head.textContent}
            </Style.TocLink>
          </div>
        ))}
      </Style.Toc>
    </Style.TocWrapper>
  );
};

export default TableOfContents;
