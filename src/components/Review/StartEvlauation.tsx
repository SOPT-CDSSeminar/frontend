import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ICBlankStar, ICFullStar } from "../../asset/icon";

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
      {starItems.map((star, index) => {
        return star ? (
          <ICFullStar id={"" + index} onClick={hanldeICStar} key={title + index} />
        ) : (
          <ICBlankStar id={"" + index} onClick={hanldeICStar} key={title + index} />
        );
      })}
    </StStarEvaluationWrapper>
  );
}

const StStarEvaluationWrapper = styled.article`
  display: flex;
  align-items: center;
  height: 3.9rem;
  margin-bottom: 2.5rem;
`;

const StStarEvaluationB1 = styled.span`
  width: 4rem;
  margin: 0rem 1.2rem;
  font-family: ${({ theme }) => theme.fonts.ohou_b1};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;
