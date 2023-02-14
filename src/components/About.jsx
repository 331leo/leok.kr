import React from 'react';

const Item = (title, line1, line2, turl = '', lurl = '') => {
  return (
    <>
      <li>
        <strong>
          <a href={turl}>{title}</a>
        </strong>
        <ul className="tabtab">
          <li>{lurl ? <a href={lurl}>{line1}</a> : line1}</li>
          <li>{line2}</li>
        </ul>
      </li>
    </>
  );
};

const About = () => {
  return (
    <>
      <div className="tokyo_tm_about">
        {/*
        <div className="about_image">
          <img src="assets/img/slider/1.jpg" alt="about" />
        </div>*/}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">About Me</h3>
          <div className="description_inner">
            <div className="left">
              <div className="category">
                <h4>활동</h4>
                <ul className="tab">
                  {Item(
                    '2023 ISEF 국제과학경진대회',
                    'System Software 국가대표',
                    '2022/11 ~ ',
                    'https://www.societyforscience.org/isef/'
                  )}
                  {Item(
                    '넷마블 마블 퓨처 레볼루션',
                    '소프트웨어 개발자',
                    '2021/6 ~ 2021/9',
                    'https://www.marvelfuturerevolution.com/ko'
                  )}
                  {Item(
                    '2021 ISEF 국제과학경진대회',
                    'System Software 국가대표',
                    '2020/10 ~ 2021/5',
                    'https://www.societyforscience.org/isef/'
                  )}
                  {Item(
                    '코드 포 코리아',
                    '활동가',
                    '2021/4 ~',
                    'https://codefor.kr'
                  )}
                  {Item(
                    '팀 크레센도',
                    '소프트웨어 개발자',
                    '2020/7 ~ 2021/9',
                    'https://crsd.team'
                  )}
                </ul>
              </div>
              <div className="category">
                <h4>수상</h4>
                <ul className="tab">
                  {Item(
                    '국제과학경진대회 한국대표 선발전',
                    '한국정보화진흥원(NIA) 국가대표 선발',
                    '2022/11'
                  )}
                  {Item(
                    '한국코드페어',
                    '2022 SW 우수인재상 (한국정보화진흥원장 은상)',
                    '2022/11'
                  )}
                  {Item(
                    '한국정보통신학회 추계종합학술대회',
                    '만료된 도메인의 전자우편을 통한 개인정보 유출에 관한 연구 학생우수논문상',
                    '2022/10',
                    'http://kiice.org',
                    'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11161488&language=ko_KR&hasTopBanner=true'
                  )}
                  {Item(
                    '국제과학경진대회 한국대표 선발전',
                    '과학창의재단 국가대표 선발',
                    '2021/3'
                  )}
                  {Item(
                    '전국 SW영재교육 산출물 경진대회',
                    '과학기술정보통신부 금상',
                    '2020/12'
                  )}
                  {Item(
                    '한국교육개발원 영재교육연구센터',
                    '서울특별시교육청 우수영재상',
                    '2019/11'
                  )}
                  {Item(
                    '선린인터넷고등학교 SW영재원 산출물 대회',
                    '선린인터넷고등학교장 금상',
                    '2018/11'
                  )}
                </ul>
              </div>
              <div className="category">
                <h4>학력</h4>
                <ul className="tab">
                  <li>
                    <a href="https://hyundai.hs.kr">현대고등학교</a> 37기
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
