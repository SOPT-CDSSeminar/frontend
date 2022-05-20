import styled from "styled-components";

import { IcCart, IcHamburger, IcLogo, IcSearch } from "../../asset/icon";

export default function HeaderView() {
  return (
    <StHeader>
      <StLeftSection>
        <IcHamburger />
      </StLeftSection>
      <StCenterSection>
        <IcLogo />
      </StCenterSection>
      <StRightSection>
        <IcSearch />
        <IcCart />
      </StRightSection>
    </StHeader>
  );
}

const StHeader = styled.header`
  position: relative;

  height: 4.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    cursor: pointer;
  }
`;

const StLeftSection = styled.p`
  margin-left: 1.5rem;
`;

const StCenterSection = styled.p`
  position: absolute;
  left: 50%;

  transform: translateX(-50%);
`;

const StRightSection = styled.p`
  margin-right: 1.5rem;

  & > svg:not(:last-child) {
    margin-right: 1.1rem;
  }
`;
