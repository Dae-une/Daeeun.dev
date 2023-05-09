import React, { FC } from 'react';

interface SVGProps {
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SVGEqualTheme: FC<SVGProps> = ({ SVG }) => {
  return <SVG stroke="var(--text-main)" />;
};

export const SVGConverseTheme: FC<SVGProps> = ({ SVG }) => {
  return <SVG stroke="var(--text-converse)" />;
};
