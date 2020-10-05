import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import BodySection from './BodySection';
import MenuSection from './MenuSection';
import DashboardPage from './DashboardPage';
import ProfilePage from './ProfilePage';
import ProxiesPage from './ProxiesPage';
import AnalyticsPage from './AnalyticsPage';
import SettingsPage from './SettingsPage';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

import App from './App';

const Root = ({store}) => (
  <Provider store={store}>
    <App>
      <Tab.Container defaultActiveKey="dashboad">
        <MenuSection>
          <Logo />
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="dashboad">
                <i className="fa fa-home" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="profile">
                <i className="fa fa-user" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="proxies">
                <i className="fa fa-ethernet" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="analytics">
                <i className="fa fa-compact-disc" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="settings">
                <i className="fa fa-cog" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </MenuSection>
        <BodySection>
          <Tab.Content>
            <Tab.Pane eventKey="dashboad">
              <DashboardPage />
            </Tab.Pane>
            <Tab.Pane eventKey="profile">
              <ProfilePage />
            </Tab.Pane>
            <Tab.Pane eventKey="proxies">
              <ProxiesPage />
            </Tab.Pane>
            <Tab.Pane eventKey="analytics">
              <AnalyticsPage />
            </Tab.Pane>
            <Tab.Pane eventKey="settings">
              <SettingsPage />
            </Tab.Pane>
          </Tab.Content>
        </BodySection>
      </Tab.Container>
      <Footer />
    </App>
  </Provider>
);

export default hot(Root);
