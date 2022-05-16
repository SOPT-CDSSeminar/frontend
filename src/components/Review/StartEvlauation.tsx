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
  height: 39px;
  margin-bottom: 25px;
  left: 14px;
  align-items: center;
`;

const StStarEvaluationB1 = styled.span`
  width: 40px;
  margin: 0px 12px;
  font-family: ${({ theme }) => theme.fonts.ohou_b1};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;
