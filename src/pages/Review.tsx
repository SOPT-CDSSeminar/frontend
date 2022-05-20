import styled from "styled-components";

import Footer from "../components/Review/Footer";
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
      <Footer />
    </StMainWrapper>
  );
}

const StMainWrapper = styled.main`
  max-width: 37.5rem;

  margin: 0 auto;
`;
