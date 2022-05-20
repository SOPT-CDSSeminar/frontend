import styled from "styled-components";

import ReviewPolicyToggle from "./PolicyToggle";
export default function ReviewPolicy() {
  return (
    <>
      <StReviewPolicy>
        <ReviewPolicyToggle />
      </StReviewPolicy>
    </>
  );
}

const StReviewPolicy = styled.section``;
