import styled, { css } from "styled-components";

export default function NavView() {
  const SUB_NAV_INDEX = 1;

  return (
    <>
      <StNavWrapper>
        <StNavItems>
          <StNavItem>프로필</StNavItem>
          <StNavItem>나의 쇼핑</StNavItem>
          <StNavItem>설정</StNavItem>
        </StNavItems>
      </StNavWrapper>
      <StNavWrapper>
        <StNavItems>
          <StSubNavItem>리뷰 쓰기</StSubNavItem>
          <StSubNavItem active={SUB_NAV_INDEX === 1}>내가 작성한 리뷰</StSubNavItem>
          <StSubNavUnderbar subnavindex={1} />
        </StNavItems>
      </StNavWrapper>
    </>
  );
}

const StNavWrapper = styled.nav`
  height: 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StNavItems = styled.ul`
  position: relative;

  display: flex;
`;

const StNavItem = styled.li`
  width: 6.4rem;

  text-align: center;
  ${({ theme }) => theme.fonts.ohou_h2};

  &:not(:last-child) {
    margin-right: 2.8rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StSubNavItem = styled.li<{ active?: boolean }>`
  width: 9.6rem;
  height: 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.ohou_h4};

  &:hover {
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.ohou_skyblue};
    `};
`;

const StSubNavUnderbar = styled.div<{ subnavindex: number }>`
  position: absolute;
  bottom: 0;

  width: 9.6rem;
  height: 0.4rem;

  background-color: ${({ theme }) => theme.colors.ohou_skyblue};

  transform: translateX(${({ subnavindex }) => 9.6 * subnavindex}rem);
`;
