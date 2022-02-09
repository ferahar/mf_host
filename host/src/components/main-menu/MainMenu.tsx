import React from 'react';
import { observer } from 'mobx-react-lite';
import { Sidebar } from '@consta/uikit/Sidebar';
import { Text } from '@consta/uikit/Text';
import MainMenuItems from './MainMenuItems';
import MainMenuLogo from './MainMenuLogo';

import './main-menu.scss';
import MainMenuHeader from './MainMenuHeader';
import { storeShell } from '../../services/common';

function MainMenu() {
  const { toggleOpenMenu, isOpenMainMenu } = storeShell;

  return (
    <Sidebar
      isOpen={isOpenMainMenu}
      position="left"
      hasOverlay={true}
      onClickOutside={toggleOpenMenu}
      onEsc={toggleOpenMenu}
      className='mainMenu'
    >
      <Sidebar.Content className="mainMenu-layout">
        <div className="mainMenu-layout__header">
          <MainMenuHeader />
        </div>
        <div className="mainMenu-layout__content">
          <MainMenuItems />
        </div>
        <footer className="mainMenu-layout__footer">
          <div className="mainMenu-layout__logo">
            <MainMenuLogo />
          </div>
          <div className="mainMenu-layout__info">
            <Text view="secondary" size="2xs">2021</Text>
            <Text view="secondary" size="2xs">ver 0.0.1</Text>
          </div>
        </footer>
      </Sidebar.Content>
    </Sidebar>
  );
}
export default observer(MainMenu);
