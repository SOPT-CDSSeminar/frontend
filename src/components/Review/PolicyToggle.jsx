import { useState } from "react";
import styled, { css } from "styled-components";

import { IcDown } from "../../asset/icon";

export default function ReviewPolicyToggle() {
  const [isToggleLabel, setIsToggleLabel] = useState(false);

  return (
    <StPolicyToggle>
      <StToggleLabel htmlFor="dropdown" onClick={() => setIsToggleLabel((prev) => !prev)}>
        <StPolicyToggleTitle>오늘의 집 리뷰 정책</StPolicyToggleTitle>
        <StPolicyToggleBtn id="btn">
          <StIcDownWrapper isToggleLabel={isToggleLabel}>
            <StIcDown />
          </StIcDownWrapper>
        </StPolicyToggleBtn>
      </StToggleLabel>
      {isToggleLabel && (
        <StPlicyToggleContents>
          오늘의집은 비교적 정보를 얻기 힘든 가구와 인테리어 제품의 정보 공유를 위해 직접 사용한 유저들의 생생하고
          진실된 리뷰 문화를 만들어 가고자 합니다. <br />
          따라서 오늘의집의 유저라면 오늘의집에서 직접 구매하지 않은 제품도 사용 경험을 공유하고 포인트를 적립받으실 수
          있습니다. <br />
          단, 다음과 같은 리뷰의 경우 블라인드 및 통보 없이 삭제 될 수 있으며, 공정위의 추천∙보증 등에 관한 표시∙광고
          심사지침(이하 지침) 및 오늘의집 서비스 이용 약관 제 14조에 따라 처벌 받을 수 있습니다.
          <br />
          1. 리뷰를 작성하는 조건으로 금전적 또는 물질적 대가를 제공받은 경우
          <br />
          2. 리뷰의 대상 업체 또는 경쟁업체의 관계자이거나 해당 업체와 개인적/사업적으로 관련 있는 경우
          <br />
          3. 해당 상품에 대한 허위의 내용을 작성한 경우
          <br />
          4. 욕설, 비난 등 업체나 타인에게 불쾌한 내용을 작성한 경우
        </StPlicyToggleContents>
      )}
    </StPolicyToggle>
  );
}

const StPolicyToggle = styled.div`
  background-color: ${({ theme }) => theme.colors.ohou_gray01};
`;

const StToggleLabel = styled.label`
  display: flex;
  height: 4.8rem;
  top: 1.4rem;
  padding-top: 1.4rem;
  padding-left: 1.4rem;
`;

const StPolicyToggleTitle = styled.p`
  display: inline-block;

  ${({ theme }) => theme.fonts.ohou_h2};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;
const StPolicyToggleBtn = styled.div`
  transition: transform 250ms ease-out;
  display: inline-block;
  margin-left: 22rem;
`;

const StPlicyToggleContents = styled.div`
  padding: 0 1.4rem 1.4rem 1.4rem;
  background-color: ${({ theme }) => theme.colors.ohou_gray01};
  ${({ theme }) => theme.fonts.ohou_b4};
  color: ${({ theme }) => theme.colors.ohou_gray05};
`;

const StIcDownWrapper = styled.div`
  ${({ isToggleLabel }) =>
    isToggleLabel &&
    css`
      transform: rotate(-180deg);
    `}
`;

const StIcDown = styled(IcDown)``;
