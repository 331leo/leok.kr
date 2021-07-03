import React, { useState } from 'react';
import Modal from 'react-modal';
import Brand from './Brand';
Modal.setAppElement('#root');

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

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
                      <a href="https://crsd.team">팀 크레센도</a>
                    </strong>
                    <ul className="tabtab">
                      <li>소프트웨어 개발자</li>
                      <li>2020/7 ~</li>
                    </ul>
                  </li>
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
                    <strong>국제과학경진대회 한국대표 선발대회</strong>
                    <ul className="tabtab">
                      <li>과학창의재단 이사장 금상</li>
                      <li>2021/3</li>
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

              {/*<div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
      </div>*/}
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            {/*}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>3.31.2005
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>31
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>Ave 11, New York, USA
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:me@leok.kr">me@leok.kr</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+770221770505">+82 0505 177 05 05</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>Univercity of Texas
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </li>
              </ul>
              {/* END UL *
            </div>*/}
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Photography Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Wedding Photography</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: `${95}%` }} />
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Lifestyle Photography</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: `${80}%` }} />
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Family Photography</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: `${90}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">English</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: `${95}%` }} />
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Japanese</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: `${90}%` }} />
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Arabian</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: `${85}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>777+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>3K</h3>
                      <span>Happy Clients</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              <div className="partners">
                <div className="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div>
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
