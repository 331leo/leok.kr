import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo/dark.png" alt="brand" />
            </Link>
          </div>
          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()} Leo Kim <br /> All Rights
              reserved
            </p>
          </div>
        </div>
      </div>

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_error">
                <div className="tokyo_tm_error_inner">
                  <h1>404!</h1>
                  <h3>Not Found</h3>
                  <p>이 페이지는 존재하지 않습니다. 홈으로 돌아가 주세요</p>
                  <Link to="/" className="ib-button">
                    홈으로 돌아가기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-wrapper">
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Leo Kim <br />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
