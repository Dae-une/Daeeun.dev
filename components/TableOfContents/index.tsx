import React, { FC, useEffect, useState } from 'react';
import { getIntersectionObserver } from 'utils/getIntersectionObserver';
import * as Style from './styles';
import { motion } from 'framer-motion';

interface TableOfContentsItemProps {
  head: Element;
  delay: number;
  currentId: string;
}

const TableOfContentsItem: FC<TableOfContentsItemProps> = ({ head, currentId, delay }) => {
  const isActived = currentId === head.id;

  return (
    <motion.div transition={{ delay }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
      <Style.TocContent key={head.id}>
        <Style.TocLink isActived={isActived} className={head.nodeName === 'H1' ? 'toc-h1' : head.nodeName === 'H2' ? 'toc-h2' : 'toc-h3'}>
          <a href={`#${head.id}`}>{head.textContent}</a>
        </Style.TocLink>
      </Style.TocContent>
    </motion.div>
  );
};

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
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <Style.Heading>ON THIS PAGE</Style.Heading>
        </motion.div>
        {headEls.map((head, index) => (
          <TableOfContentsItem head={head} currentId={currentId} delay={(0.1 + index) / 10} key={head.id} />
        ))}
      </Style.Toc>
    </Style.TocWrapper>
  );
};

export default TableOfContents;
