import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { HeaderLogo, HeaderButton, HeaderModule, Header } from '@consta/uikit/Header';
import { IconHamburger } from '@consta/uikit/IconHamburger';
import { Text } from '@consta/uikit/Text';
import { storeShell } from '../../services/common';
import MainMenu from '../main-menu';
import MainHeaderLogin from './MainHeaderLogin';
import { MainHeaderProps } from './types';


const MainHeader: FC<MainHeaderProps> = props => {
  const { children, title } = props;
  const { toggleOpenMenu, currentTitle } = storeShell;

  const getChildren = () => {
    if (children) {
      return (
        <>
          { children }
        </>
      );
    }
    return null;
  };

  return (
    <>
      <Header
        className="header header__fixed-top"
        leftSide={
          <>
            <HeaderModule>
              <HeaderButton onClick={toggleOpenMenu} iconLeft={IconHamburger} />
            </HeaderModule>
            <HeaderModule indent='s'>
              <HeaderLogo>
                <Text as="p" size="s" weight="bold">
                  {title || currentTitle}
                </Text>
              </HeaderLogo>
            </HeaderModule>
            { getChildren() }
          </>
        }
        rightSide={
          <MainHeaderLogin/>
        }
      />
      <MainMenu />
    </>
  );
};

export default observer(MainHeader);
