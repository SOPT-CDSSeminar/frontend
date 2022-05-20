/*
마지막 편집자: 22-05-15 joohaem
변경사항 및 참고:
  - 서히 파트
  - 열쩡킹짱서히 잘 할거지 ?? ~#~
  - 내에서 자유롭게 컴포넌트 분리해도 되고 도입하고 싶은 거 있으면 언제든지 환영 ~~
  - 화이팅텡!
*/
import React, { useState } from "react";
import styled from "styled-components";

import StarEvaluationArticle from "./StartEvlauation";

export default function ReviewForm() {
  const [starEvluationList, setStarEvluationList] = useState<number[]>([0, 0, 0, 0, 0]);
  const starEvaluationListTitle: string[] = ["내구성", "가격", "디자인", "배송"];

  const handleStarEvaluationList = (newStarEvluationItem: number, title: string) => {
    const titleIndex = starEvaluationListTitle.indexOf(title);
    const newStarEvluationList = [...starEvluationList];
    newStarEvluationList[titleIndex] = newStarEvluationItem;
    setStarEvluationList(newStarEvluationList);
  };
  return (
    <>
      <StReviewh2>별점 평가</StReviewh2>
      {starEvaluationListTitle.map((title, index) => {
        return (
          <StarEvaluationArticle
            key={title}
            title={title}
            starEvaluation={starEvluationList[index]}
            handleStarEvaluationList={handleStarEvaluationList}
          />
        );
      })}
    </>
  );
}
const StReviewh2 = styled.h2`
  width: 5.3rem;
  margin: 0rem 1.2rem;
  font-family: ${({ theme }) => theme.fonts.ohou_h2};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;
