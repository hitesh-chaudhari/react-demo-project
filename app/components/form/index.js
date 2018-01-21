import React from 'react';
import { Form as FormContainer } from './styled';

const Form = ({ children }) =>
  <FormContainer>
    {children}
  </FormContainer>;

export { Form }
