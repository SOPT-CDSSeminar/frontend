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
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function MyReview() {
  const [products, setProducts] = useState([]);

  async function getDataList() {
    const result = await axios.get("http://localhost:4000/data");
    //console.log("통신 결과: ", result);
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
              [{place}] {name}
            </StProductTitle>
            <StProductSize>{size}</StProductSize>
            <StReviewInfo>
              {nickname} | {date} | {platform} 리뷰
            </StReviewInfo>
            <StReviewText>{review}</StReviewText>
            <StBtnEdit>수정</StBtnEdit>
            <StReviewImg src={image} alt="페브릭 포스터" />
          </StProductCard>
        );
      })}
    </>
  );
}

const StBtnWrapper = styled.section`
  display: flex;

  margin-bottom: 7.6rem;
  margin-top: 5.9 rem;
`;

const StBtnBestOrder = styled.p`
  font-family: ${({ theme }) => theme.fonts.ohou_h3};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;

const StBtnLatestOrder = styled.p`
  font-family: ${({ theme }) => theme.fonts.ohou_h3};
  color: ${({ theme }) => theme.colors.ohou_skyblue};

  margin-left: 3.5rem;
`;

const StProductCard = styled.article`
  display: block;
`;

const StProductTitle = styled.p`
  margin-bottom: 0.4rem;

  font-family: ${({ theme }) => theme.fonts.ohou_h2};
  color: ${({ theme }) => theme.colors.ohou_gray06};
  letter-spacing: -0.04em;
`;

const StProductSize = styled.p`
  width: 6.8rem;
  height: 1.7rem;

  margin-bottom: 2.7rem;

  font-family: ${({ theme }) => theme.fonts.ohou_b1};
  color: ${({ theme }) => theme.colors.ohou_gray06};
  letter-spacing: -0.04em;
`;

const StReviewInfo = styled.p`
  width: 20.7rem;
  height: 1.7rem;

  margin-bottom: 1.2rem;

  font-family: ${({ theme }) => theme.fonts.ohou_b3};
  color: ${({ theme }) => theme.colors.ohou_gray04};
`;

const StReviewText = styled.p`
  font-family: ${({ theme }) => theme.fonts.ohou_b2};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;

const StReviewImg = styled.img`
  width: 9.1rem;
  height: 9.1rem;

  margin-top: 2.4rem;

  border-radius: 0.4rem;
`;

const StBtnEdit = styled.button`
  width: 2.3rem;
  height: 2.1rem;

  margin-top: 0.8rem;
  margin-left: 32.5rem;

  position: absolute;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.1rem;
  /* identical to box height, or 175% */
  letter-spacing: 0.02em;

  color: ${({ theme }) => theme.colors.ohou_gray04};
`;
