import { Dispatch, SetStateAction } from 'react';

const observerOption = {
  rootMargin: '0px 0px -90% 0px',
  threshold: 0.1,
};

export const getIntersectionObserver = (setState: Dispatch<SetStateAction<string>>) => {
  let direction = '';
  let prevYposition = 0;

  // scroll 방향 check function
  const checkScrollDirection = (prevY: number) => {
    if (window.scrollY === 0 && prevY === 0) return;
    else if (window.scrollY > prevY) direction = 'down';
    else direction = 'up';

    prevYposition = window.scrollY;
  };

  // observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      checkScrollDirection(prevYposition);

      if ((direction === 'down' && !entry.isIntersecting) || (direction === 'up' && entry.isIntersecting)) {
        setState(entry.target.id);
      }
    });
  }, observerOption);

  return observer;
};