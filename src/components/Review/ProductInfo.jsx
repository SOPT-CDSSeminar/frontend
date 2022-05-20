/*
변경사항 및 참고:
  - 나연 파트
  - 멜팅스튜디오 정보 있는 그 블록 UI 구성해주면 됩니당당
  - 화이텡 ~~
*/
import styled from "styled-components";

import product from "../../asset/image/Review/productImage.png";
export default function ProductInfo() {
  return (
    <StProduct>
      <StProductImg>
        <img src={product} alt="상품" />
      </StProductImg>
      <StProductDetail>
        <StDetailStore>멜팅스튜디오</StDetailStore>
        <StDetailTitle>느긋한 오후의 기록, 쉬폰 패브릭 포스터 / 73 Boston #2 / 142-225cm</StDetailTitle>
        <StDetailSize>142 - 225cm</StDetailSize>
      </StProductDetail>
    </StProduct>
  );
}

const StProduct = styled.div`
  display: flex;
  margin: 1.8rem 1.4rem;
`;
const StProductImg = styled.div``;
const StProductDetail = styled.div`
  margin-left: 1.1rem;
  margin-top: 0.9rem;
`;

const StDetailStore = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;
  letter-spacing: -0.04rem;
  color: ${({ theme }) => theme.colors.ohou_gray04};
  margin-bottom: 0.2rem;
`;
const StDetailTitle = styled.p`
  color: ${({ theme }) => theme.colors.ohou_gray05};
  ${({ theme }) => theme.fonts.ohou_b1};
  margin-bottom: 0.4rem;
`;
const StDetailSize = styled.p`
  ${({ theme }) => theme.fonts.ohou_b4};
  color: ${({ theme }) => theme.colors.ohou_gray04};
`;
