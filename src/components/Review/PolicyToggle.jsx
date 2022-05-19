import "./PolicyToggle.css";

import styled from "styled-components";

import { IcDown } from "../../asset/icon";

export default function ReviewPolicyToggle() {
  return (
    <StPolicyToggle>
      <StToggleInput type="checkbox" id="dropdown" />
      <StToggleLabel for="dropdown">
        <StPolicyToggleTitle>오늘의 집 리뷰 정책</StPolicyToggleTitle>
        <StPolicyToggleBtn id="btn">
          <IcDown />
        </StPolicyToggleBtn>
      </StToggleLabel>
      <StPlicyToggleContents>
        오늘의집은 비교적 정보를 얻기 힘든 가구와 인테리어 제품의 정보 공유를 위해 직접 사용한 유저들의 생생하고 진실된
        리뷰 문화를 만들어 가고자 합니다. <br />
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
    </StPolicyToggle>
  );
}

const StPolicyToggle = styled.div`
  height: 4.8em;
  background-color: ${({ theme }) => theme.colors.ohou_gray01};
  display: flex;
  position: relative;
`;

const StToggleInput = styled.input`
  left: 0;
  position: absolute;
  visibility: hidden;
`;

const StToggleLabel = styled.label`
  display: flex;
  justify-content: space-between;
`;

const StPolicyToggleTitle = styled.p`
  position: absolute;
  ${({ theme }) => theme.fonts.ohou_h2};
  color: ${({ theme }) => theme.colors.ohou_gray06};
  font-family: "Noto Sans KR";
  top: 1em;
  left: 1.2em;
`;
const StPolicyToggleBtn = styled.div`
  position: absolute;
  top: 1.3em;
  left: 34.2em;
`;
const StPlicyToggleContents = styled.div`
  z-index: 1;
  display: none;
  position: absolute;
  padding: 0 1.4em 1.4em 1.4em;
  font-family: "Noto Sans KR";
  background-color: ${({ theme }) => theme.colors.ohou_gray01};
  ${({ theme }) => theme.fonts.ohou_b4};
  color: ${({ theme }) => theme.colors.ohou_gray05};
`;
