import React from 'react';
import Social from './Social';
import getProfilePic from '../utils/facebook';
const Home = () => {
  const [profileUrl, setProfileUrl] = React.useState('');
  React.useEffect(async () => {
  /*  setProfileUrl(await getProfilePic(1203990983569928));*/
    setProfileUrl("https://pb.leok.kr/IMG_3276.jpeg");
  }, []);

  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: `url(${profileUrl}`,
              }}
            />
          </div>
          <div className="details">
            <h3 className="name">Leo Kim</h3>
            <p className="job">
              AKA. Donghyun Kim <br /> 세상을 바꾸는 프로그래머가 꿈인 평범한
              고등학생 개발자입니다 😄
            </p>
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
