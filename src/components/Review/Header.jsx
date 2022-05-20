import styled from "styled-components";

import { IcBanner, IcClose } from "../../asset/icon";

export default function Header() {
  return (
    <StHeader>
      <StNav>
        <IcClose />
        <StNavTitle>리뷰쓰기</StNavTitle>
      </StNav>
      <IcBanner />
    </StHeader>
  );
}

const StHeader = styled.div``;
const StNav = styled.nav`
  display: flex;
  padding: 0.5rem;
  position: relative;
`;

const StNavTitle = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.colors.ohou_gray05};
  ${({ theme }) => theme.fonts.ohou_h1};
  left: 15.8rem;
`;
