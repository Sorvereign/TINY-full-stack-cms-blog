import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ center }) =>
    center &&
    `min-height: 100vh;
     display: flex;
     align-items: center;	
`};
  ${({ blog }) =>
    blog &&
    `margin: 0 auto;
     max-width: 42rem;
     padding: 2.625rem 1.3125rem;
`};
`;
