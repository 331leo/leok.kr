import React from 'react';
import Social from './Social';
import axios from 'axios';
const Home = () => {
  const [profileUrl, setProfileUrl] = React.useState('');
  React.useEffect(async () => {
    setProfileUrl(
      await axios(
        `https://graph.facebook.com/v11.0/768809940421370/picture?redirect=0&type=large`
      ).then((response) => {
        const data = response.data;
        return data.data.url;
      })
    );
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
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Leo Kim</h3>
            <p className="job">
              AKA. Donghyun Kim <br /> 세상을 바꾸는 프로그래머가 꿈인 평범한
              고등학생 개발자입니다 😄
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
