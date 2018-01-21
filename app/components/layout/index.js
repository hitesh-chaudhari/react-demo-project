import React from 'react';
import { Header, Footer } from '../index';
import { Layout as LayoutContainer } from './styles';

const Layout = props =>
  <LayoutContainer>
    <Header />
    {props.children}
    <Footer />
  </LayoutContainer>;

export { Layout };
