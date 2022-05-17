import React from "react";
import styled from "styled-components";

import { ICBlankStar, ICFullStar } from "../../asset/image";

interface StarEvaluationArticleProps {
  title: string;
  starEvaluation: boolean[];
  handleStarEvaluationList: (newStarEvluationItem: boolean[], title: string) => void;
}
export default function StarEvaluationArticle(props: StarEvaluationArticleProps) {
  const { title, starEvaluation, handleStarEvaluationList } = props;

  // 별점 제어
  const hanldeICStar = (e: React.MouseEvent<SVGSVGElement>) => {
    const clickIndex = +e.currentTarget.id;
    handleStarEvaluationList(
      starEvaluation.map((star, index) => {
        if (index === clickIndex) return !star;
        else if (index < clickIndex) return true;
        else return false;
      }),
      title,
    );
  };
  return (
    <StStarEvaluationWrapper>
      <StStarEvaluationB1>{title}</StStarEvaluationB1>
      {starEvaluation.map((star, index) =>
        star ? (
          <ICFullStar id={index + ""} onClick={hanldeICStar} key={index} />
        ) : (
          <ICBlankStar id={index + ""} onClick={hanldeICStar} key={index} />
        ),
      )}
    </StStarEvaluationWrapper>
  );
}

const StStarEvaluationWrapper = styled.article`
  display: flex;
  align-items: center;
  height: 3.9rem;
  margin-bottom: 2.5rem;
  left: 1.4rem;
`;

const StStarEvaluationB1 = styled.span`
  width: 4rem;
  margin: 0rem 1.2rem;
  font-family: ${({ theme }) => theme.fonts.ohou_b1};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;
