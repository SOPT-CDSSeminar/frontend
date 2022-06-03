import { constants } from "http2";
import React, { useState } from "react";
import styled, { css } from "styled-components";

import { ICReviewFormCompletionBtn } from "../../../asset/icon";

import { PostBody } from "../../../utils/dataType";
import { postData } from "../../../utils/lib/api";

import PhotoAttach from "./PhotoAttach";
import ReviewWrite from "./ReviewWrite";
import StarEvaluationArticle from "./StartEvaluation";
export default function ReviewForm() {
  const [imgFile, setImgFile] = useState<File>();
  const [starEvluationList, setStarEvluationList] = useState<number[]>([0, 0, 0, 0, 0]);

  const [reviewText, setReviewText] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  // const check;
  // 리뷰 텍스트
  const handleReviewText = (newReviewText: string) => {
    setReviewText(newReviewText);

    if (reviewText.length < 20) {
      setErrorText("20자 이상 입력해주세요.");
      setIsError(true);
    } else if (20 <= reviewText.length && reviewText.length < 1000) {
      setErrorText("");
      setIsError(false);
    } else {
      setErrorText("1000자 이하로 입력해주세요.");
      setIsError(true);
    }
  };

  // 완료 버튼
  const postReviewForm = async () => {
    console.log("리뷰완료");

    fetchPostByAxios();
  };

  //서버에 post 하는 함수
  async function fetchPostByAxios() {
    let starSum = 0;
    starEvluationList.forEach((item) => {
      starSum += item;
    });
    console.log(starSum);
// const { data } = await postData(reviewData);

    if (imgFile) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imgFile);
      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        // const previewImage = docume?nt.getElementById("image");
        // previewImage.src = e.target.result;
        console.log(e.target?.result);
      };
    }
    const reviewInfo: PostBody = {
      totalAverage: starSum / 4,
      reviewImage: "",
      comment: reviewText,
    };
    const JSON_reviewInfo = JSON.stringify(reviewInfo);

    console.log("stringify 먹인거>>>>>", JSON_reviewInfo);
    // const JSON_reviewInfo = await axios.post("url", JSON_reviewInfo);
  }

  const starEvaluationListTitle: string[] = ["내구성", "가격", "디자인", "배송"];
  // 이미지 파일
  const handleImgFile = (selectImgFile: File) => {
    setImgFile(selectImgFile);
  };

  // 별점 평가 다루는 함수
  const handleStarEvaluationList = (newStarEvluationItem: number, title: string) => {
    const titleIndex = starEvaluationListTitle.indexOf(title);
    const newStarEvluationList = [...starEvluationList];
    newStarEvluationList[titleIndex] = newStarEvluationItem;
    setStarEvluationList(newStarEvluationList);
  };

  return (
    <StReviewFormWrapper>
      <StReviewTitle>
        <StReviewh2>별점 평가</StReviewh2>
      </StReviewTitle>
      {starEvaluationListTitle.map((title, index) => {
        return (
          <StarEvaluationArticle
            key={title}
            title={title}
            starEvaluation={starEvluationList[index]}
            handleStarEvaluationList={handleStarEvaluationList}
          />
        );
      })}

      <PhotoAttach imgFile={imgFile} handleImgFile={handleImgFile} />

      <StReviewTitle>
        <StReviewErrorh2 isError={isError}>리뷰 작성</StReviewErrorh2>
        <StReviewErrorSpan>{errorText}</StReviewErrorSpan>
      </StReviewTitle>
      <ReviewWrite isError={isError} reviewText={reviewText} handleReviewText={handleReviewText} />
      <ICReviewFormCompletionBtn onClick={postReviewForm} />
    </StReviewFormWrapper>
  );
}

const StReviewFormWrapper = styled.section`
  margin: 0rem 1.4rem 3rem;
`;

const StReviewTitle = styled.div`
  margin-bottom: 1.5rem;
`;

const StReviewh2 = styled.h2`
  display: inline;

  ${({ theme }) => theme.fonts.ohou_h2};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;

const StReviewErrorh2 = styled(StReviewh2)<{ isError: boolean }>`
  ${({ isError }) =>
    isError
      ? css`
          color: ${({ theme }) => theme.colors.ohou_red};
        `
      : css`
          color: ${({ theme }) => theme.colors.ohou_gray06};
        `};
`;

const StReviewErrorSpan = styled.span`
  margin-left: 0.8rem;
  ${({ theme }) => theme.fonts.ohou_b5};
  color: ${({ theme }) => theme.colors.ohou_red};
  text-align: center;
`;
