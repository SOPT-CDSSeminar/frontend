import React, { useState } from "react";
import styled, { css } from "styled-components";

import { ICAttachPhotoBtn, ICDeleteBtn } from "../../../asset/icon";
import ImgPhotoReviewBubble from "../../../asset/image/Review/photoReviewBubbleImage.png";

interface PhotoAttachProps {
  imgFile?: File;
  handleImgFile: (selectImgFile: File) => void;
}

export default function PhotoAttach(props: PhotoAttachProps) {
  const { handleImgFile } = props;
  const [imgBase64, setImgBase64] = useState<string>("");

  const handleDeleteBtn = () => {
    setImgBase64("");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const fileList = e.target.files;
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64 = reader.result;
        console.log(base64);
        if (base64) {
          setImgBase64(base64.toString());
        }
      };
      // 파일을 읽어 버퍼에 저장
      reader.readAsDataURL(fileList[0]);
      handleImgFile(fileList[0]);
    }
  };

  return (
    <StPhotoAttachWrapper>
      <StTitleWrapper>
        <Sth2>사진 첨부 (선택)</Sth2>
        <StImg src={ImgPhotoReviewBubble} alt="포토리뷰 500 포인트" />
      </StTitleWrapper>

      <Stb3>사진을 첨부해주세요. (최대 1장)</Stb3>
      <StImageWrapper isAttach={Boolean(imgBase64)}>
        <p>
          <ICDeleteBtn onClick={handleDeleteBtn} />
        </p>
        <StImageContent alt="선택" src={imgBase64} />
      </StImageWrapper>
      <StPhotoInputWrapper>
        <label htmlFor="photoFile">
          <ICAttachPhotoBtn />
        </label>
        <input id="photoFile" type="file" onChange={handleImageChange} />
      </StPhotoInputWrapper>
    </StPhotoAttachWrapper>
  );
}

const StPhotoAttachWrapper = styled.div`
  margin-top: 2.2rem;
`;

const StTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Sth2 = styled.h2`
  text-align: center;
  ${({ theme }) => theme.fonts.ohou_h2};
  color: ${({ theme }) => theme.colors.ohou_gray06};
`;

const StImg = styled.img`
  margin-left: 0.6rem;
`;

const Stb3 = styled.p`
  margin: 1rem 0rem 0.8rem;
  ${({ theme }) => theme.fonts.ohou_b3};
  color: ${({ theme }) => theme.colors.ohou_gray04};
`;

const StPhotoInputWrapper = styled.div`
  margin-bottom: 3.9rem;

  & label {
    cursor: pointer;
  }

  & input[type="file"] {
    position: absolute;
    width: 34.5rem;
    height: 4rem;

    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const StImageWrapper = styled.div<{ isAttach: boolean }>`
  display: none;
  position: relative;
  margin-bottom: 1rem;
  width: 34.6rem;
  height: 20.4rem;
  text-align: center;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.ohou_gray02};

  & > p {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  ${({ isAttach }) =>
    isAttach &&
    css`
      display: block;
    `};
`;

const StImageContent = styled.img`
  max-width: 100%;
  height: 20.4rem;
`;
