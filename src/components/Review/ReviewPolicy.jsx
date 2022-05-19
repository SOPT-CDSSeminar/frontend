/*
변경사항 및 참고:
  - 나연 파트
  - 오늘의 집 리뷰 정책 부분 구현해주면 돼 !!!~
  - 그 block을 클릭하면 아래 안내사항 보여주고, 다시 눌러주면 숨겨지는 형태로!
  - 거기 토글링에 svg 파일도 180도 돌려주면 UI적으로 더 좋겠지?? (아래 화살표를 위 화살표로)
  - 화이텡!!!
*/
import styled from "styled-components";

import { IcDown } from "../../asset/icon";

export default function ReviewPolicy() {
  return (
    <StReviewPolicy>
      <StPolicyToggle>
        <StPolicyToggleTitle>오늘의 집 리뷰 정책</StPolicyToggleTitle>
        <StPolicyToggleBtn>
          <IcDown />
        </StPolicyToggleBtn>
      </StPolicyToggle>
      <StReviewDescription>
        <StDescriptionFisrt>◾ 포인트는 최초 작성한 리뷰를 기준으로 지급됩니다.</StDescriptionFisrt>
        <StDescriptionSecond>
          ◾ 상품과 무관한 내용이나 사진, 동일 문자 반복 등의 부적합한 리뷰는 사전
        </StDescriptionSecond>
        <StDescriptionThird>경고 없이 삭제 및 포인트 회수될 수 있습니다.</StDescriptionThird>
      </StReviewDescription>
    </StReviewPolicy>
  );
}
const StReviewPolicy = styled.div``;

const StPolicyToggle = styled.div`
  height: 48px;
  background-color: ${({ theme }) => theme.colors.ohou_gray01};
  display: flex;
  position: relative;
`;
const StPolicyToggleTitle = styled.p`
  position: absolute;
  ${({ theme }) => theme.fonts.ohou_h2};
  color: ${({ theme }) => theme.colors.ohou_gray06};
  font-family: "Noto Sans KR";
  top: 1em;
  left: 1.4em;
`;
const StPolicyToggleBtn = styled.div`
  position: absolute;
  top: 1.3em;
  left: 34.2em;
`;
//background-color: rgb(247, 249, 250);
const StReviewDescription = styled.div`
  background-color: ${({ theme }) => theme.colors.ohou_gray01};
  height: 86px;
  margin-top: 3em;
  position: relative;
  border-top: 0.15em;
  border-bottom: 0.15em;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.ohou_gray02};
`;

const StDescriptionFisrt = styled.p`
  ${({ theme }) => theme.fonts.ohou_b3};
  color: ${({ theme }) => theme.colors.ohou_gray05};
  position: absolute;
  font-family: "Noto Sans KR";
  top: 1.5em;
  left: 1.4em;
`;
const StDescriptionSecond = styled.p`
  ${({ theme }) => theme.fonts.ohou_b3};
  color: ${({ theme }) => theme.colors.ohou_gray05};
  position: absolute;
  font-family: "Noto Sans KR";
  top: 3.1em;
  left: 1.4em;
`;
const StDescriptionThird = styled.p`
  ${({ theme }) => theme.fonts.ohou_b3};
  color: ${({ theme }) => theme.colors.ohou_gray05};
  position: absolute;
  font-family: "Noto Sans KR";
  top: 4.3em;
  left: 2.2em;
`;
