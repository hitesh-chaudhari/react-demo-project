import styled, { css } from 'styled-components';

const H3 = styled.h3`
  font-size: 60px;
  ${(props) => props.isActive && css`
    color: red;
  `}
`;

const H2 = styled.h3`
  font-size: 40px;
`;

export { H3, H2 };
