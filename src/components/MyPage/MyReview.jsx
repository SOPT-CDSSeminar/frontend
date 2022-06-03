import moment from "moment";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { reqAPI } from "../../utils/lib";
import CustomStar from "./CustomStar";

export default function MyReview() {
  const [products, setProducts] = useState([]);

  async function getDataList() {
    const result = await reqAPI.get("/review", {
      params: {
        sort: "new",
      },
    });
    setProducts(result.data.data);
  }

  function getStarPercentageWithAverage(idx, _totalAverage) {
    if (idx <= _totalAverage) {
      return 1;
    } else if (idx - 1 < _totalAverage) {
      return _totalAverage % 1;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <StCardSection>
      <StBtnWrapper>
        <StBtnBestOrder>베스트순</StBtnBestOrder>
        <StBtnLatestOrder>시간순</StBtnLatestOrder>
      </StBtnWrapper>
      {products &&
        products.map((content) => {
          const { totalAverage, reviewImage, comment, createdAt } = content;
          const gitDate = { createdAt };
          const gitDateString = JSON.stringify(gitDate);
          const subDate = gitDateString.slice(14, 24);
          const result = moment(subDate, "YYYY-MM-DD").format("YYYY.MM.DD");

          return (
            <StProductCard key={createdAt}>
              <StProductTitle>
                멜팅스튜디오 느긋한 오후의 기록, 쉬폰 패브릭 포스터 / 73 Boston #2 / 142-225cm
              </StProductTitle>
              <StProductSize>142-225cm</StProductSize>
              <StReviewStarWrapper>
                {[1, 2, 3, 4, 5].map((starIdx) => (
                  <CustomStar
                    key={`${createdAt}-${starIdx}`}
                    starId={`${createdAt}-${starIdx}`}
                    percentage={getStarPercentageWithAverage(starIdx, totalAverage)}
                  />
                ))}
              </StReviewStarWrapper>
              <StReviewInfo>nayeon | {result} | 오늘의집 리뷰</StReviewInfo>
              <StReviewText>{comment}</StReviewText>
              <StBtnEdit>수정</StBtnEdit>
              <StReviewImg src={reviewImage} alt="페브릭 포스터" />
            </StProductCard>
          );
        })}
    </StCardSection>
  );
}

const StCardSection = styled.section`
  margin-bottom: 2.4rem;
  padding: 0 1.4rem;

  & > article:not(:last-child) {
    margin-bottom: 3.5rem;
  }
`;

const StBtnWrapper = styled.header`
  display: flex;

  margin: 5.9rem 0 7.6rem 1.5rem;
`;

const StBtnBestOrder = styled.p`
  ${({ theme }) => theme.fonts.ohou_h3};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;

const StBtnLatestOrder = styled.p`
  ${({ theme }) => theme.fonts.ohou_h3};
  color: ${({ theme }) => theme.colors.ohou_skyblue};

  margin-left: 3.5rem;
`;

const StProductCard = styled.article`
  position: relative;

  display: block;
`;

const StProductTitle = styled.p`
  margin-bottom: 0.4rem;

  ${({ theme }) => theme.fonts.ohou_h2};
  color: ${({ theme }) => theme.colors.ohou_gray06};
  letter-spacing: -0.04em;
`;

const StProductSize = styled.p`
  width: 6.8rem;
  height: 1.7rem;

  margin-bottom: 0.5rem;

  ${({ theme }) => theme.fonts.ohou_b1};
  color: ${({ theme }) => theme.colors.ohou_gray06};
  letter-spacing: -0.04em;
`;

const StReviewStarWrapper = styled.ul`
  margin-bottom: 0.3rem;

  display: flex;
`;
const StReviewInfo = styled.p`
  width: 26rem;
  height: 1.7rem;

  margin-bottom: 1.2rem;

  ${({ theme }) => theme.fonts.ohou_b3};
  color: ${({ theme }) => theme.colors.ohou_gray04};
`;

const StReviewText = styled.p`
  ${({ theme }) => theme.fonts.ohou_b2};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;

const StReviewImg = styled.img`
  width: 9.1rem;
  height: 9.1rem;

  margin-top: 2.4rem;

  border-radius: 0.4rem;
`;

const StBtnEdit = styled.button`
  width: 4.8rem;
  height: 4.8rem;

  position: absolute;
  right: 0rem;

  font-size: 1.2rem;

  color: ${({ theme }) => theme.colors.ohou_gray04};
`;
