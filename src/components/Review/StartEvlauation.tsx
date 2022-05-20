import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { ICReviewStar } from "../../asset/icon";

interface StarEvaluationArticleProps {
  title: string;
  starEvaluation: number;
  handleStarEvaluationList: (newStarEvluationItem: number, title: string) => void;
}
export default function StarEvaluationArticle(props: StarEvaluationArticleProps) {
  const { title, starEvaluation, handleStarEvaluationList } = props;

  const [starItems, setStarItems] = useState<boolean[]>([false, false, false, false, false]);
  useEffect(() => {
    const currentItems = starItems.map((star, index) => {
      if (index < starEvaluation) return true;
      else return false;
    });
    setStarItems(currentItems);
  }, [starEvaluation]);

  // 별점 제어
  const hanldeICStar = (e: React.MouseEvent<SVGSVGElement>) => {
    const clickIndex = +e.currentTarget.id;

    if (starItems[clickIndex]) handleStarEvaluationList(clickIndex, title);
    else handleStarEvaluationList(clickIndex + 1, title);
  };

  return (
    <StStarEvaluationWrapper>
      <StStarEvaluationB1>{title}</StStarEvaluationB1>
      {starItems.map((star: boolean, index: number) => (
        <StICStar isFull={star} onClick={hanldeICStar} key={title + index} id={"" + index} />
      ))}
    </StStarEvaluationWrapper>
  );
}

const StStarEvaluationWrapper = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const StStarEvaluationB1 = styled.span`
  width: 6rem;
  font-family: ${({ theme }) => theme.fonts.ohou_b1};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;

const StICStar = styled(({ isFull, ...props }) => <ICReviewStar {...props} />)`
  ${({ isFull }) =>
    isFull
      ? css`
          path {
            fill: ${({ theme }) => theme.colors.ohou_skyblue};
          }
        `
      : css`
          path {
            fill: ${({ theme }) => theme.colors.ohou_gray03};
          }
        `};
`;
