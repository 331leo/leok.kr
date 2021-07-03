import React from 'react';

const DarkModeController = () => {
  function changeColorMode(isDark) {
    if (isDark) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    changeColorMode(true);
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      changeColorMode(!!e.matches);
    });
  return <>{}</>;
};
export default DarkModeController;
