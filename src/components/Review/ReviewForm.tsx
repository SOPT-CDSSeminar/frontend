/*
마지막 편집자: 22-05-15 joohaem
변경사항 및 참고:
  - 서히 파트
  - 열쩡킹짱서히 잘 할거지 ?? ~#~
  - 내에서 자유롭게 컴포넌트 분리해도 되고 도입하고 싶은 거 있으면 언제든지 환영 ~~
  - 화이팅텡!
*/
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { ICReviewFormCompletionBtn } from "../../asset/icon";
import ReviewWrite from "./ReviewWrite";
export default function ReviewForm() {
  const [reviewText, setReviewText] = useState<string>("");
  const [isOver, setIsOver] = useState(false);
  const [isMin, setIsMin] = useState(true);
  // const check;
  const handleReviewText = (newReviewText: string) => {
    setReviewText(newReviewText);
  };

  const handleRevireForm = () => {
    console.log("리뷰완료");
  };
  return (
    <StReviewFormhWrapper>
      <StReviewTitle>
        <StReviewh2>리뷰 작성</StReviewh2>
        <StReviewErrorSpan>
          {isOver ? "1000자 이하로 입력해주세요. " : isMin ? "20자 이상 입력해주세요." : ""}
        </StReviewErrorSpan>
      </StReviewTitle>
      <ReviewWrite reviewText={reviewText} handleReviewText={handleReviewText} />
      <ICReviewFormCompletionBtn onClick={handleRevireForm} />
    </StReviewFormhWrapper>
  );
}
const StReviewFormhWrapper = styled.section`
  margin: 0rem 1.4rem;
`;
const StReviewTitle = styled.div`
  margin-bottom: 1.5rem;
`;
const StReviewh2 = styled.h2`
  display: inline;
  width: 5.3rem;
  margin: 1.2rem 0rem;
  font-family: ${({ theme }) => theme.fonts.ohou_h2};
  text-align: center;
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;
const StReviewErrorSpan = styled.span`
  margin-left: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.ohou_b5};
  color: ${({ theme }) => theme.colors.ohou_red};
  text-align: center;
`;
