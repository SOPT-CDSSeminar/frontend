/*
변경사항 및 참고:
  - 나연 파트
  - 오늘의 집 리뷰 정책 부분 구현해주면 돼 !!!~
  - 그 block을 클릭하면 아래 안내사항 보여주고, 다시 눌러주면 숨겨지는 형태로!
  - 거기 토글링에 svg 파일도 180도 돌려주면 UI적으로 더 좋겠지?? (아래 화살표를 위 화살표로)
  - 화이텡!!!
*/
import styled from "styled-components";

import Footer from "../MyPage/Footer";
import ReviewPolicyToggle from "./PolicyToggle";
export default function ReviewPolicy() {
  return (
    <>
      <StReviewPolicy>
        <ReviewPolicyToggle />
      </StReviewPolicy>
      <Footer />
    </>
  );
}

const StReviewPolicy = styled.section``;
