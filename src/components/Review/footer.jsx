import styled from "styled-components";

export default function footer() {
  return (
    <StFooter>
      <StReviewDescription>
        ◾ 포인트는 최초 작성한 리뷰를 기준으로 지급됩니다.
        <br />◾ 상품과 무관한 내용이나 사진, 동일 문자 반복 등의 부적합한 리뷰는 사전 경고 없이 삭제 및 포인트 회수될
        수 있습니다.
      </StReviewDescription>
    </StFooter>
  );
}
const StFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.ohou_gray01};
  height: 86px;
  margin-top: 3em;
  position: relative;
  border-top: 0.15em;
  border-bottom: 0.15em;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.ohou_gray02};
`;

const StReviewDescription = styled.p`
  ${({ theme }) => theme.fonts.ohou_b3};
  color: ${({ theme }) => theme.colors.ohou_gray05};
  position: absolute;
  font-family: "Noto Sans KR";
  top: 1.5em;
  left: 1.4em;
`;
