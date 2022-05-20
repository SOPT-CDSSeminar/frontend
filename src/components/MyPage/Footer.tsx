/*
마지막 편집자: 22-05-16 joohaem
고민점:
  - 가독성 wack
  - 퍼블리싱 wack
*/

import styled from "styled-components";

import {
  IcApple,
  IcArrow,
  IcBlog,
  IcFacebook,
  IcGoogleplay,
  IcInstargram,
  IcIsms,
  IcKakaostory,
  IcNaver,
} from "../../asset/icon";
import ImgDnv from "../../asset/image/MyPage/dnvImage.png";
import { companyInfos, textLinks } from "../../core/mypageFooterInfomations";

export default function Footer() {
  return (
    <StFooter>
      <StCustomSevice>
        고객센터
        <IcArrow />
      </StCustomSevice>
      <StCustomSeviceNumber>1670-0876</StCustomSeviceNumber>
      <StOperatingHours>평일 09:00 ~ 18:00 (주말 &#38; 공휴일 제외)</StOperatingHours>
      <StIconLinksWrapper>
        {/* {footerIconList.map(({ name, icon }) => (
          <li key={name}>{icon()}</li>
        ))} */}
        <li>
          <IcApple />
        </li>
        <li>
          <IcGoogleplay />
        </li>
        <li>
          <IcKakaostory />
        </li>
        <li>
          <IcFacebook />
        </li>
        <li>
          <IcInstargram />
        </li>
        <li>
          <IcBlog />
        </li>
        <li>
          <IcNaver />
        </li>
      </StIconLinksWrapper>
      <StTextLinksWrapper>
        {textLinks.map((textLink, index) => (
          <li key={index}>{textLink}</li>
        ))}
      </StTextLinksWrapper>
      <StCompanyInfosWrapper>
        {companyInfos.map((companyInfo, index) => (
          <li key={index}>{companyInfo}</li>
        ))}
      </StCompanyInfosWrapper>
      <StCopyright>Copyright 2014. bucketplace, Co., Ltd. All rights reserved</StCopyright>
      <StHistoryWrapper>
        <StIcIsms />
        <StIsmsHistoryText>
          <p>오늘의 집 서비스 운영</p>
          <p>2021. 09. 08 ~ 2024. 09. 07</p>
        </StIsmsHistoryText>
        <StDnvImage src={ImgDnv} alt="디앤브이" />
      </StHistoryWrapper>
    </StFooter>
  );
}

const StFooter = styled.footer`
  padding: 2.4rem 1.4rem;

  background-color: ${({ theme }) => theme.colors.ohou_gray01};
`;

const StCustomSevice = styled.p`
  ${({ theme }) => theme.fonts.ohou_h4};
`;

const StCustomSeviceNumber = styled.strong`
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 3.8rem;
  color: ${({ theme }) => theme.colors.ohou_gray05};
`;

const StOperatingHours = styled.p`
  ${({ theme }) => theme.fonts.ohou_b4};
  color: ${({ theme }) => theme.colors.ohou_gray04};
`;

const StIconLinksWrapper = styled.ul`
  display: flex;
  gap: 1.6rem;

  margin-top: 1.9rem;

  & > li:hover {
    cursor: pointer;
  }
`;

const StTextLinksWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;

  margin-top: 3.5rem;

  font-size: 0.9rem;
  line-height: 1.3rem;
  color: ${({ theme }) => theme.colors.ohou_gray05};

  & > li:hover {
    cursor: pointer;
  }
`;

const StCompanyInfosWrapper = styled.ul`
  margin-top: 1.4rem;

  ${({ theme }) => theme.fonts.ohou_small};
  color: ${({ theme }) => theme.colors.ohou_gray04};

  & > li:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

const StCopyright = styled.p`
  margin-top: 1rem;

  ${({ theme }) => theme.fonts.ohou_small};
  color: ${({ theme }) => theme.colors.ohou_gray05};
`;

const StHistoryWrapper = styled.div`
  height: 3.6rem;

  display: flex;
  align-items: center;

  margin-top: 2.8rem;
`;

const StIcIsms = styled(IcIsms)`
  margin-right: 0.5rem;
`;

const StIsmsHistoryText = styled.div`
  ${({ theme }) => theme.fonts.ohou_small};
  color: ${({ theme }) => theme.colors.ohou_gray04};
`;

const StDnvImage = styled.img`
  margin-left: 1.1rem;
`;
