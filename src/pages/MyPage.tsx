import styled from "styled-components";

import Footer from "../components/MyPage/Footer";
import Header from "../components/MyPage/Header";
import MyReview from "../components/MyPage/MyReview";

export default function MyPage() {
  return (
    <StMainWrapper>
      <Header />
      <MyReview />
      <Footer />
    </StMainWrapper>
  );
}

const StMainWrapper = styled.main`
  max-width: 37.5rem;

  margin: 0 auto;
`;
