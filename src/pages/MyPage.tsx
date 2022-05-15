import styled from "styled-components";

import Footer from "../components/MyPage/Footer";
import Header from "../components/MyPage/Header";
import MyReview from "../components/MyPage/MyReview";

export default function MyPage() {
  return (
    <div>
      <StMainWrapper>
        <Header />
        <MyReview />
        <Footer />
      </StMainWrapper>
    </div>
  );
}

const StMainWrapper = styled.main`
  max-width: 37.5rem;

  margin: 0 auto;
`;
