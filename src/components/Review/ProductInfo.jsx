/*
마지막 편집자: 22-05-15 joohaem
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
    <StInfo>
      <img src={product} alt="상품" />
    </StInfo>
  );
}

const StInfo = styled.div``;
