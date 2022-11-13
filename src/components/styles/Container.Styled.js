import styled from "styled-components";

export const ContainerStyled = styled.div`
  padding: 0 1em;
  max-width: 1220px;
  width: 100%;
  margin: 3em auto;

  @media (min-width: 720px) {
    margin: 6em auto;
    padding: 0 3em;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
`;
