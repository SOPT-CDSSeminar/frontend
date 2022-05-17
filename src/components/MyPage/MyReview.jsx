/*
변경사항 및 참고:
  - 송아 파트
  - 베스트순 최신순 ~~~ 상품 정보 리스트 나열해주기!

  - jsonData.json 에 mock-data 넣어놨는데 "http://localhost:4000/data" url로 받아올 수 있어!
  - 이번 주는 UI만 하면 되는데, 서버 데이터 받아오는 거 연습해보려면 해봐-

  - $ yarn
  - $ yarn server
  - 하면 서버 구동될거야 ($ yarn start 랑 다르게 구동시켜줘야핼)

  - 화이ㅣ팅 ~~
*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function MyReview() {
  const [products, setProducts] = useState([]);

  async function getDataList() {
    const result = await axios.get("http://localhost:4000/data");
    console.log("통신 결과: ", result);
    setProducts(result.data);
  }

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <>
      <StBtnWrapper>
        <StBtnBestOrder>베스트순</StBtnBestOrder>
        <StBtnLatestOrder>최신순</StBtnLatestOrder>
      </StBtnWrapper>
      {products.map((content, idx) => {
        const { name, place, size, nickname, date, platform, image, review } = content;
        return (
          <StProductCard key={name}>
            <StProductTitle>
              [ {place} ] {name}
            </StProductTitle>
            {size}
            <StReviewInfo>
              {nickname} | {date} | {platform} 리뷰
            </StReviewInfo>
            <StReviewText>{review}</StReviewText>
            <img src={image} alt="페브릭 포스터" />
            <button>수정</button>
          </StProductCard>
        );
      })}
    </>
  );
}

const StBtnWrapper = styled.section`
  display: flex;
`;

const StBtnBestOrder = styled.p`
  position: absolute;
`;

const StBtnLatestOrder = styled.p`
  position: absolute;
`;

const StProductCard = styled.article`
  position: absolute;
`;

const StProductTitle = styled.p`
  position: absolute;
`;

const StReviewInfo = styled.p`
  position: absolute;
`;
const StReviewText = styled.p`
  position: absolute;
`;
