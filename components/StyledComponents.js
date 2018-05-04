import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: Arial;
`;

export const P = styled.p`
  font-family: Arial;
`;

export const A = styled.a`
  font-family: Arial;
  text-decoration: none;
  color: blue;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const UL = styled.ul`
  padding: 0;
`;

export const LI = styled.li`
  list-style: none;
  margin: 5px 0;
`;
