import styled from "styled-components";

import Header from "../components/Review/Header";
import ProductInfo from "../components/Review/ProductInfo";
import ReviewForm from "../components/Review/ReviewForm";
import ReviewPolicy from "../components/Review/ReviewPolicy";

export default function Review() {
  return (
    <StMainWrapper>
      <Header />
      <ProductInfo />
      <ReviewForm />
      <ReviewPolicy />
    </StMainWrapper>
  );
}

const StMainWrapper = styled.main`
  max-width: 37.5rem;

  margin: 0 auto;

  /* 아래는 예시코드
  color: ${({ theme }) => theme.colors.ohou_gray01};
  ${({ theme }) => theme.fonts.ohou_h1}; */
`;
