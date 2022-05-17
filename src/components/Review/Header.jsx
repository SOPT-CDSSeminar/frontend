/*
마지막 편집자: 22-05-15 joohaem
변경사항 및 참고:
  - 나연 파트
  - 리뷰쓰기 ~ 포인트 배너 작성하기!
  - 근데 그 포인트 배너같은 경우에는 피그마에 올라와있어서, 따로 UI 작성 안하고 다운받아서 사용해도 좋을 것 같아!
  - 다운받는 법은 내가 올린 PR 참고하면 될 것 같다 !!!~
  - 화이텡 ~~
*/

import styled from "styled-components";

import { IcClose } from "../../asset/icon";
import banner from "../../asset/image/Review/bannerImage.png";
export default function Header() {
  return (
    <StHeader>
      <IcClose />
      <p>리뷰쓰기</p>
      <img src={banner} alt="배너" />
    </StHeader>
  );
}

const StHeader = styled.nav``;
