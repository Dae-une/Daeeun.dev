import React, { ReactNode } from 'react';
import * as Style from './styles';

const Layout = ({ children }: { children: ReactNode }) => {
  return <Style.Layout>{children}</Style.Layout>;
};

export default Layout;
