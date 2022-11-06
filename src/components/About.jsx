import React from 'react';
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
                  <li>
                    <strong>
                      <a href="https://codefor.kr">코드 포 코리아</a>
                    </strong>
                    <ul className="tabtab">
                      <li>활동가</li>
                      <li>2021/4 ~</li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      <a href="https://crsd.team">팀 크레센도</a>
                    </strong>
                    <ul className="tabtab">
                      <li>소프트웨어 개발자</li>
                      <li>2020/7 ~ 2021/9</li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      <a href="https://www.facebook.com/teamcrsd/posts/876325893025095">
                        넷마블 마블 퓨처 레볼루션 X 팀 크레센도
                      </a>
                    </strong>
                    <ul className="tabtab">
                      <li>소프트웨어 개발자</li>
                      <li>2021/6 ~ 2021/9</li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      <a href="https://www.societyforscience.org/isef/">
                        ISEF 국제과학 경진대회
                      </a>
                    </strong>
                    <ul className="tabtab">
                      <li>System Software 국가대표</li>
                      <li>2020/10 ~ 2021/4</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="category">
                <h4>수상</h4>
                <ul className="tab">
                  <li>
                    <strong>
                      <a href="https://www.kcf.or.kr/">한국코드페어</a>
                    </strong>
                    <ul className="tabtab">
                      <li>한국정보화진흥원장 은상</li>
                      <li>2022/11</li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      <a href="http://kiice.org">
                        한국정보통신학회 추계종합학술대회
                      </a>
                    </strong>
                    <ul className="tabtab">
                      {/* prettier-ignore */}
                      <li>
                        만료된 도메인의 전자우편을 통한 개인정보 유출에 관한 연구 학생우수논문상
                      </li>
                      <li>2022/10</li>
                    </ul>
                  </li>
                  <li>
                    <strong>국제과학경진대회 한국대표 선발대회</strong>
                    <ul className="tabtab">
                      <li>과학창의재단 이사장 금상</li>
                      <li>2021/3</li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      <a href="https://www.msit.go.kr/">
                        전국 SW영재교육 산출물 경진대회
                      </a>
                    </strong>
                    <ul className="tabtab">
                      <li>과학기술정보통신부 장관 금상</li>
                      <li>2020/12</li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      <a href="https://sunrint.hs.kr">
                        한국교육개발원 영재교육연구센터
                      </a>
                    </strong>
                    <ul className="tabtab">
                      <li>서울특별시교육청 우수영재상</li>
                      <li>2019/11</li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      <a href="https://sunrint.hs.kr">SW영재원 산출물 대회</a>
                    </strong>
                    <ul className="tabtab">
                      <li>선린인터넷고등학교장 금상</li>
                      <li>2018/11</li>
                    </ul>
                  </li>
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
