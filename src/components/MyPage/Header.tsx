import styled from "styled-components";

import HeaderView from "./HeaderView";
import NavView from "./NavView";

export default function Header() {
  return (
    <StSection>
      <HeaderView />
      <NavView />
    </StSection>
  );
}

const StSection = styled.section`
  & > * {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.ohou_gray03};
  }
`;
