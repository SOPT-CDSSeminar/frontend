/*
변경사항 및 참고:
  - 나연 파트
  - 멜팅스튜디오 정보 있는 그 블록 UI 구성해주면 됩니당당
  - 화이텡 ~~
*/
import styled from "styled-components";

//import { IcProduct } from "../../asset/icon";
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
        <StDetailSize>142-225cm</StDetailSize>
      </StProductDetail>
    </StProduct>
  );
}

const StProduct = styled.div`
  display: flex;
  margin: 1.8rem 1.4rem;
`;
const StProductImg = styled.div``;
const StProductDetail = styled.div``;

const StDetailStore = styled.p``;
const StDetailTitle = styled.p``;
const StDetailSize = styled.p``;
