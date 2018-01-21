import React from 'react';
import { H3, H2 } from '../../components';

const NotFound = () => ([
  <H3 key="notFoundH3">404 page not found</H3>,
  <H2 key="notFoundH2">We are sorry but the page you are looking for does not exist.</H2>
]);

export { NotFound };
