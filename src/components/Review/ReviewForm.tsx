/*
마지막 편집자: 22-05-15 joohaem
변경사항 및 참고:
  - 서히 파트
  - 열쩡킹짱서히 잘 할거지 ?? ~#~
  - 내에서 자유롭게 컴포넌트 분리해도 되고 도입하고 싶은 거 있으면 언제든지 환영 ~~
  - 화이팅텡!
*/
import React, { useState } from "react";
import styled from "styled-components";

import PhotoAttach from "./PhotoAttach";

export default function ReviewForm() {
  const [imgFile, setImgFile] = useState<File>();
  const handleImgFile = (selectImgFile: File) => {
    setImgFile(selectImgFile);
  };
  // 파일 업로드 함수
  const uploadFile = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    const formData = new FormData();
    if (imgFile) {
      formData.append("uploadImage", imgFile, imgFile.name);
      // const config = {
      //   Header: {
      //     "content-type": "multipart/form-data",
      //   },
      // };
      // axios.post('', formData, config);
    }
  };
  return (
    <StPhotoAttachWrapper>
      <PhotoAttach imgFile={imgFile} handleImgFile={handleImgFile} />
    </StPhotoAttachWrapper>
  );
}
const StPhotoAttachWrapper = styled.section`
  margin: 0rem 1.4rem;
`;
