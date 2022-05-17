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

import ReviewWrite from "./ReviewWrite";
export default function ReviewForm() {
  const [reviewText, setReviewText] = useState<string>("");

  const handleReviewText = (newReviewText: string) => {
    setReviewText(newReviewText);
  };
  return (
    <StReviewFormhWrapper>
      <StReviewh2>리뷰 작성</StReviewh2>
      <ReviewWrite reviewText={reviewText} handleReviewText={handleReviewText} />
    </StReviewFormhWrapper>
  );
}
const StReviewFormhWrapper = styled.div`
  margin: 0rem 1.4rem;
`;
const StReviewh2 = styled.h2`
  width: 5.3rem;
  margin: 0rem 1.2rem;
  font-family: ${({ theme }) => theme.fonts.ohou_h2};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;
