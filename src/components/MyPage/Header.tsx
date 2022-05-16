import styled from "styled-components";

import HeaderView from "./HeaderView";

export default function Header() {
  return (
    <StSection>
      <HeaderView />
      <nav></nav>
      <nav></nav>
    </StSection>
  );
}

const StSection = styled.section`
  & > * {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.ohou_gray03};
  }
`;
