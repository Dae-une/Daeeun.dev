import React, { useEffect, useState } from 'react';
import { getIntersectionObserver } from 'utils/getIntersectionObserver';
import * as Style from './styles';

const TableOfContents = () => {
  const [currentId, setCurrentId] = useState('');
  const [headEls, setHeadEls] = useState<Element[]>([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const els = Array.from(document.querySelectorAll('h1, h2, h3'));

    setHeadEls(els);

    els.map((head) => {
      observer.observe(head);
    });
  }, []);

  return (
    <Style.TocWrapper>
      <Style.Toc>
        {headEls.map((head) => (
          <div key={head.id}>
            <Style.TocLink href={`#${head.id}`} isActived={head.id === currentId} className={head.nodeName === 'H1' ? 'toc-h1' : head.nodeName === 'H2' ? 'toc-h2' : 'toc-h3'}>
              {head.textContent}
            </Style.TocLink>
          </div>
        ))}
      </Style.Toc>
    </Style.TocWrapper>
  );
};

export default TableOfContents;
