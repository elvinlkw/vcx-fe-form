import styled from "styled-components";

export const StyledHeading = styled.p`
  ${({ theme }) => theme.typography.heading};
  font-family: "Nunito";
`;

export const StyledText = styled.p`
  color: #616161;
`;
