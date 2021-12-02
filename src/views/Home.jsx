import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import ReactGA from 'react-ga';

const HomeView = (props) => {
  const [tabIndex, setTabIndex] = useState(props.tabIndex);
  ReactGA.initialize(process.env.REACT_APP_GA);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/img/logo/dark.png" alt="brand" />
                </Link>
              </div>

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>

                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                </ul>
              </div>

              <div className="copyright">
                <p>
                  &copy; {new Date().getFullYear()} Leo Kim{' '}
                  {process.env.HOMEPAGE_GA}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </TabList>

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <TabPanel>
                  <Home />
                </TabPanel>

                <TabPanel>
                  <About />
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default HomeView;
