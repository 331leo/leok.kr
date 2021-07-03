import React from 'react';

const SocialShare = [
  {
    iconName: 'github',
    link: 'https://www.github.com/331leo',
  },
  {
    iconName: 'discord',
    link: 'https://discord.com/users/687623503985508380',
  },
  { iconName: 'facebook', link: 'https://facebook.com/kdh2005' },
  {
    iconName: 'instagram',
    link: 'https://www.instagram.com/k.dh05',
  },
  {
    iconName: 'idcard',
    link: 'http://rocketpunch.com/@331leo',
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
