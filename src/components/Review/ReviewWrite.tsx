import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";

interface ReviewWriteProps {
  reviewText: string;
  handleReviewText: (newReviewText: string) => void;
}
export default function ReviewWrite(props: ReviewWriteProps) {
  const { reviewText, handleReviewText } = props;
  const reviewTextRef = useRef<HTMLTextAreaElement>(null);
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (reviewTextRef.current) {
      reviewTextRef.current.value = e.target.value;
      handleReviewText(reviewTextRef.current.value);
    }
  };
  return (
    <StReviewWrapper>
      <StInputReviewText
        ref={reviewTextRef}
        placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다. (최소 20자 이상)"
        maxLength={1500}
        onChange={handleTextChange}
      />
      <StReviewTextCountSpan>{reviewText.length}</StReviewTextCountSpan>
    </StReviewWrapper>
  );
}
const StReviewWrapper = styled.div`
  position: relative;
`;
const StInputReviewText = styled.textarea`
  width: 34.5rem;
  height: 20.4rem;
  padding: 0.7rem;
  border-radius: 0.3rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.ohou_gray03};
  outline: none;
  resize: none;
  font-family: ${({ theme }) => theme.fonts.ohou_b1};
  color: ${({ theme }) => theme.colors.ohou_gray04};
  &:focus {
    border: 0.2rem solid ${({ theme }) => theme.colors.ohou_skyblue};
  }
`;

const StReviewTextCountSpan = styled.span`
  position: absolute;
  bottom: 0.9rem;
  right: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.ohou_b5};
  color: ${({ theme }) => theme.colors.ohou_gray04};
`;
